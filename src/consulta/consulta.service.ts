import { Injectable } from '@nestjs/common';
import { CreateConsultaDto, UpdateConsultaDto } from './dto/consulta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { Repository } from 'typeorm';
import { Entrada } from 'src/entrada/entities/entrada.entity';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,

    @InjectRepository(Entrada)
    private entradaRepository: Repository<Entrada>,
  ) {}

  create(cConsulta: CreateConsultaDto) {
    const nConsulta = this.consultaRepository.create(cConsulta);

    const cEntrada = {
      idEntrada: nConsulta.idEntrada,
      idMedico: nConsulta.idMedico,
      idPaciente: nConsulta.idPaciente,
      idHistoriaClinica: nConsulta.idHistoriaClinica,
      fecha: nConsulta.fecha,
    };
    const nEntrada = this.entradaRepository.create(cEntrada);

    this.entradaRepository.save(nEntrada);

    return this.consultaRepository.save(nConsulta);
  }

  findAll() {
    return this.consultaRepository.find();
  }

  findOne(id: number) {
    return this.consultaRepository.findOne({
      where: {
        idEntrada: id,
      },
    });
  }

  async update(id: number, uConsulta: UpdateConsultaDto) {
    const consulta = await this.findOne(id);
    this.consultaRepository.merge(consulta, uConsulta);
    return await this.consultaRepository.save(consulta);
  }

  remove(id: number) {
    return this.consultaRepository.delete(id);
  }
}
