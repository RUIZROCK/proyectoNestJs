import { Injectable } from '@nestjs/common';
import { CreateMedicoDto, UpdateMedicoDto } from './dto/medico.dto';
import { Medico } from './entities/medico.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(Medico)
    private medicoRepository: Repository<Medico>,
  ) {}

  create(cMedico: CreateMedicoDto) {
    return this.medicoRepository.save(cMedico);
  }

  findAll() {
    return this.medicoRepository.find();
  }

  findOne(id: number) {
    return this.medicoRepository.findOne({ where: { idMedico: id } });
  }

  async update(id: number, uMedico: UpdateMedicoDto) {
    const medico = await this.findOne(id);
    this.medicoRepository.merge(medico, uMedico);
    return await this.medicoRepository.save(medico);
  }

  remove(id: number) {
    return this.medicoRepository.delete(id);
  }
}
