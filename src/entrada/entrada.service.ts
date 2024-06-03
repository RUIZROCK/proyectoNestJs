import { Injectable } from '@nestjs/common';
import { CreateEntradaDto, UpdateEntradaDto } from './dto/entrada.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrada } from './entities/entrada.entity';
import { Between, IsNull, Not, Repository } from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Medico } from 'src/medico/entities/medico.entity';
import { Practica } from 'src/practica/entities/practica.entity';
import { Consulta } from 'src/consulta/entities/consulta.entity';

@Injectable()
export class EntradaService {
  constructor(
    @InjectRepository(Entrada)
    private entradaRepository: Repository<Entrada>,
    @InjectRepository(Medico)
    private MedicoRepository: Repository<Medico>,
    @InjectRepository(Paciente)
    private PacienteRepository: Repository<Paciente>,
    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,
    @InjectRepository(Practica)
    private practicaRepository: Repository<Practica>,
  ) {}

  create(cEntrada: CreateEntradaDto) {
    const nEntrada = this.entradaRepository.create(cEntrada);
    return this.entradaRepository.save(nEntrada);
  }

  async findAllWithFilters(
    tipo: string,
    desde: Date,
    hasta: Date,
    matricula: string,
    especialidad: string,
    fechaBaja: boolean,
    obraSocial: string,
    diagnostico: string,
    complicacion: boolean,
  ) {
    let resultadosEntradas: Entrada[];
    let entradas: Entrada[];
    if (tipo === 'todo') {
      resultadosEntradas = await this.getConsultasOfPatiens(
        desde,
        hasta,
        matricula,
        especialidad,
        fechaBaja,
        obraSocial,
        diagnostico,
      );
      entradas = resultadosEntradas.concat(
        await this.getPracticasOfPatiens(
          desde,
          hasta,
          matricula,
          especialidad,
          fechaBaja,
          obraSocial,
          complicacion,
        ),
      );
    }

    if (tipo === 'consulta') {
      entradas = await this.getConsultasOfPatiens(
        desde,
        hasta,
        matricula,
        especialidad,
        fechaBaja,
        obraSocial,
        diagnostico,
      );
    }

    if (tipo === 'practica') {
      entradas = await this.getPracticasOfPatiens(
        desde,
        hasta,
        matricula,
        especialidad,
        fechaBaja,
        obraSocial,
        complicacion,
      );
    }

    return entradas;
  }

  getConsultasOfPatiens(
    desde: Date,
    hasta: Date,
    matricula: string,
    especialidad: string,
    fechaBaja: boolean,
    obraSocial: string,
    diagnostico: string,
  ) {
    if (fechaBaja === false) {
      return this.consultaRepository.find({
        where: {
          fecha: Between(desde, hasta),
          idMedico: {
            matricula: matricula,
            especialidad: {
              nombre: especialidad,
            },
          },
          diagnostico: { nombre: diagnostico },
          idPaciente: {
            fechaBaja: Not(IsNull()),
            obraSocial: {
              nombre: obraSocial,
            },
          },
        },
        relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
      });
    }

    if (fechaBaja === true) {
      return this.consultaRepository.find({
        where: {
          fecha: Between(desde, hasta),
          idMedico: {
            matricula: matricula,
            especialidad: {
              nombre: especialidad,
            },
          },
          diagnostico: { nombre: diagnostico },
          idPaciente: {
            obraSocial: {
              nombre: obraSocial,
            },
          },
        },
        relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
      });
    }
  }

  getPracticasOfPatiens(
    desde: Date,
    hasta: Date,
    matricula: string,
    especialidad: string,
    fechaBaja: boolean,
    obraSocial: string,
    complicacion: boolean,
  ) {
    if (fechaBaja === false && complicacion === true) {
      return this.practicaRepository.find({
        where: {
          fecha: Between(desde, hasta),
          idMedico: {
            matricula: matricula,
            especialidad: {
              nombre: especialidad,
            },
          },
          complicaciones: Not('') || Not(IsNull()),
          idPaciente: {
            fechaBaja: Not(IsNull()),
            obraSocial: {
              nombre: obraSocial,
            },
          },
        },
        relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
      });
    }

    if (fechaBaja === false && complicacion === false) {
      return this.practicaRepository.find({
        where: {
          fecha: Between(desde, hasta),
          idMedico: {
            matricula: matricula,
            especialidad: {
              nombre: especialidad,
            },
          },
          idPaciente: {
            fechaBaja: Not(IsNull()),
            obraSocial: {
              nombre: obraSocial,
            },
          },
        },
        relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
      });
    }

    if (fechaBaja === true && complicacion === true) {
      return this.practicaRepository.find({
        where: {
          fecha: Between(desde, hasta),
          idMedico: {
            matricula: matricula,
            especialidad: {
              nombre: especialidad,
            },
          },
          complicaciones: Not('') || Not(IsNull()),
          idPaciente: {
            obraSocial: {
              nombre: obraSocial,
            },
          },
        },
        relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
      });
    }

    if (fechaBaja === true && complicacion === false) {
      return this.practicaRepository.find({
        where: {
          fecha: Between(desde, hasta),
          idMedico: {
            matricula: matricula,
            especialidad: {
              nombre: especialidad,
            },
          },
          idPaciente: {
            obraSocial: {
              nombre: obraSocial,
            },
          },
        },
        relations: ['tipo', 'idMedico', 'idMedico.especialidad'],
      });
    }
  }

  findAllForShow() {
    const entradas = this.entradaRepository.find({
      relations: [
        'idMedico',
        'idMedico.especialidad',
        'idPaciente',
        'idPaciente.obraSocial',
      ],
    });

    return entradas;
  }

  findOneWithPatiens(histClinica: number) {
    return this.entradaRepository.find({
      where: {
        idHistoriaClinica: histClinica,
      },
    });
  }

  findOne(id: number) {
    return this.entradaRepository.findOne({
      where: {
        idEntrada: id,
      },
    });
  }

  async update(id: number, uEntrada: UpdateEntradaDto) {
    const entrada = await this.findOne(id);
    this.entradaRepository.merge(entrada, uEntrada);
    return await this.entradaRepository.save(entrada);
  }

  remove(id: number) {
    return this.entradaRepository.delete(id);
  }
}
