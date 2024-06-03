import { Injectable } from '@nestjs/common';
import {
  CreateTipoPracticaDto,
  UpdateTipoPracticaDto,
} from './dto/tipo-practica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoPractica } from './entities/tipo-practica.entity';

@Injectable()
export class TipoPracticaService {
  constructor(
    @InjectRepository(TipoPractica)
    private tipoPracticaRepository: Repository<TipoPractica>,
  ) {}

  create(cPracticaDto: CreateTipoPracticaDto) {
    const nTipoPractica = this.tipoPracticaRepository.create(cPracticaDto);
    return this.tipoPracticaRepository.save(nTipoPractica);
  }

  findAll() {
    return this.tipoPracticaRepository.find();
  }

  findOne(id: number) {
    return this.tipoPracticaRepository.findOne({
      where: {
        idTipoPractica: id,
      },
    });
  }

  async update(id: number, uTipoPracticaDto: UpdateTipoPracticaDto) {
    const tipoPractica = await this.findOne(id);
    this.tipoPracticaRepository.merge(tipoPractica, uTipoPracticaDto);
    return await this.tipoPracticaRepository.save(tipoPractica);
  }

  remove(id: number) {
    return this.tipoPracticaRepository.delete(id);
  }
}
