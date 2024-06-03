import { Injectable } from '@nestjs/common';
import { CreateEnfermedadDto, UpdateEnfermedadDto } from './dto/enfermedad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(Enfermedad)
    private enfermedadRepository: Repository<Enfermedad>,
  ) {}

  create(cEnfermedadDto: CreateEnfermedadDto) {
    const nEnfermedad = this.enfermedadRepository.create(cEnfermedadDto);
    return this.enfermedadRepository.save(nEnfermedad);
  }

  findAll() {
    return this.enfermedadRepository.find();
  }

  findOne(id: number) {
    return this.enfermedadRepository.findOne({
      where: {
        idEnfermedad: id,
      },
    });
  }

  findForNameIncomplete(name: string) {
    const query = `
      SELECT * 
      FROM enfermedad 
      WHERE nombre LIKE $1
    `;
    const enfermedades = this.enfermedadRepository.query(query, [`%${name}%`]);
    return enfermedades;
  }

  async update(id: number, upEnfermedadDto: UpdateEnfermedadDto) {
    const enfermedad = await this.findOne(id);
    this.enfermedadRepository.merge(enfermedad, upEnfermedadDto);
    return await this.enfermedadRepository.save(enfermedad);
  }

  remove(id: number) {
    return this.enfermedadRepository.delete(id);
  }
}
