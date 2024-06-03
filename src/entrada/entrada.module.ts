import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaController } from './entrada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrada } from './entities/entrada.entity';
import { Medico } from 'src/medico/entities/medico.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { EntradaInterceptor } from './entrada.interceptor';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { Practica } from 'src/practica/entities/practica.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Entrada, Paciente, Medico, Consulta, Practica]),
  ],
  controllers: [EntradaController],
  providers: [
    EntradaService,
    { provide: APP_INTERCEPTOR, useClass: EntradaInterceptor },
  ],
  exports: [EntradaService],
})
export class EntradaModule {}
