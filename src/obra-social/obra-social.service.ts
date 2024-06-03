import { Injectable } from '@nestjs/common';
import {
  CreateObraSocialDto,
  UpdateObraSocialDto,
} from './dto/obra-social.dto';
import { ObraSocial } from './entities/obra-social.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ObraSocialService {
  constructor(
    @InjectRepository(ObraSocial)
    private obraSocialRepository: Repository<ObraSocial>,
  ) {}

  create(cObraSocial: CreateObraSocialDto) {
    const nObraSocial = this.obraSocialRepository.create(cObraSocial);
    return this.obraSocialRepository.save(nObraSocial);
  }

  findAll() {
    return this.obraSocialRepository.find();
  }

  findOne(id: number) {
    return this.obraSocialRepository.findOne({
      where: {
        idObraSocial: id,
      },
    });
  }

  async update(id: number, uObraSocial: UpdateObraSocialDto) {
    const obraSocial = await this.findOne(id);
    this.obraSocialRepository.merge(obraSocial, uObraSocial);
    return await this.obraSocialRepository.save(obraSocial);
  }

  remove(id: number) {
    return this.obraSocialRepository.delete(id);
  }
}
