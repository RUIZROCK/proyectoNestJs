import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { Paciente } from './entities/paciente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObraSocial } from 'src/obra-social/entities/obra-social.entity';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { Practica } from 'src/practica/entities/practica.entity';
import { Entrada } from 'src/entrada/entities/entrada.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Paciente,
      ObraSocial,
      Consulta,
      Practica,
      Entrada,
    ]),
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}
