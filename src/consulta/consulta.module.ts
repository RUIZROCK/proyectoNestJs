import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { Entrada } from 'src/entrada/entities/entrada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta, Entrada])],
  controllers: [ConsultaController],
  providers: [ConsultaService],
  exports: [ConsultaService],
})
export class ConsultaModule {}
