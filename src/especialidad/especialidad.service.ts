import { Injectable } from '@nestjs/common';
import {
  CreateEspecialidadDto,
  UpdateEspecialidadDto,
} from './dto/especialidad.dto';
import { Especialidad } from './entities/especialidad.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EspecialidadService {
  constructor(
    @InjectRepository(Especialidad)
    private especialidadRepository: Repository<Especialidad>,
  ) {}

  create(cEspecialidad: CreateEspecialidadDto) {
    const nEspecialidad = this.especialidadRepository.create(cEspecialidad);
    return this.especialidadRepository.save(nEspecialidad);
  }

  findAll() {
    return this.especialidadRepository.find();
  }

  findOne(id: number) {
    return this.especialidadRepository.findOne({
      where: {
        idEspecialidad: id,
      },
    });
  }

  async update(id: number, uEspecialidad: UpdateEspecialidadDto) {
    const especialidad = await this.findOne(id);
    this.especialidadRepository.merge(especialidad, uEspecialidad);
    return await this.especialidadRepository.save(especialidad);
  }

  remove(id: number) {
    return this.especialidadRepository.delete(id);
  }
}
