import { Module } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { PracticaController } from './practica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { Entrada } from 'src/entrada/entities/entrada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Practica, Entrada])],
  controllers: [PracticaController],
  providers: [PracticaService],
  exports: [PracticaService],
})
export class PracticaModule {}
