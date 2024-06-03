import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePacienteDto, UpdatePacienteDto } from './dto/paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { Practica } from 'src/practica/entities/practica.entity';
import { Entrada } from 'src/entrada/entities/entrada.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,

    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,

    @InjectRepository(Practica)
    private PracticaRepository: Repository<Practica>,
  ) {}

  async create(cPaciente: CreatePacienteDto) {
    const exist = await this.pacienteRepository.findOne({
      where: { dni: cPaciente.dni },
    });

    if (exist) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const nPaciente = this.pacienteRepository.create(cPaciente);
    await this.pacienteRepository.save(nPaciente);
    return nPaciente;
  }

  findAll() {
    return this.pacienteRepository.find({
      where: { fechaBaja: null },
      relations: ['obraSocial'],
    });
  }

  async findOneWithHistory(dni, practica, consulta, desde, hasta) {
    let resultados;
    let entradas: Entrada[];
    if (consulta == true && practica == false) {
      entradas = resultados = await this.getConsultasOfPatiens(dni);
    } else {
      if (consulta == false && practica == true) {
        entradas = resultados = await this.getPracticasOfPatiens(dni);
      } else {
        if (consulta == true && practica == true) {
          resultados = await this.getConsultasOfPatiens(dni);
          entradas = resultados.concat(await this.getPracticasOfPatiens(dni));
        }
      }
    }

    const paciente = await this.pacienteRepository.findOne({
      where: { dni: dni, fechaBaja: null },
      relations: ['obraSocial'],
    });
    paciente.entrada = entradas.filter(
      (x) => x.fecha >= desde && x.fecha <= hasta,
    );
    return paciente;
  }

  getConsultasOfPatiens(dni: number) {
    return this.consultaRepository.find({
      where: {
        idHistoriaClinica: dni,
      },
      relations: ['diagnostico', 'idMedico', 'idMedico.especialidad'],
    });
  }

  getPracticasOfPatiens(dni: number) {
    return this.PracticaRepository.find({
      where: {
        idHistoriaClinica: dni,
      },
      relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
    });
  }

  findOne(dni: number) {
    return this.pacienteRepository.findOne({
      where: {
        dni: dni,
      },
      relations: ['obraSocial'],
    });
  }

  async update(dni: number, uPaciente: UpdatePacienteDto) {
    const paciente = await this.findOne(dni);
    this.pacienteRepository.merge(paciente, uPaciente);
    return await this.pacienteRepository.save(paciente);
  }

  remove(dni: number) {
    return this.pacienteRepository.softDelete(dni);
  }
}
