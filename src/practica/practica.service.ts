import { Injectable } from '@nestjs/common';
import { CreatePracticaDto, UpdatePracticaDto } from './dto/practica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { Repository } from 'typeorm';
import { Entrada } from 'src/entrada/entities/entrada.entity';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private practicaRepository: Repository<Practica>,

    @InjectRepository(Entrada)
    private entradaRepository: Repository<Entrada>,
  ) {}

  create(cPractica: CreatePracticaDto) {
    const nPractica = this.practicaRepository.create(cPractica);
    const cEntrada = {
      idEntrada: nPractica.idEntrada,
      idMedico: nPractica.idMedico,
      idPaciente: nPractica.idPaciente,
      idHistoriaClinica: nPractica.idHistoriaClinica,
      fecha: nPractica.fecha,
    };
    const nEntrada = this.entradaRepository.create(cEntrada);

    this.entradaRepository.save(nEntrada);

    return this.practicaRepository.save(nPractica);
  }

  findAll() {
    return this.practicaRepository.find();
  }

  findOne(id: number) {
    return this.practicaRepository.findOne({
      where: {
        idEntrada: id,
      },
    });
  }

  async update(id: number, uPractica: UpdatePracticaDto) {
    const practica = await this.findOne(id);
    this.practicaRepository.merge(practica, uPractica);
    return await this.practicaRepository.save(practica);
  }

  remove(id: number) {
    return this.practicaRepository.delete(id);
  }
}
