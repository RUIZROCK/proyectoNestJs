import { Module } from '@nestjs/common';
import { TipoPracticaService } from './tipo-practica.service';
import { TipoPracticaController } from './tipo-practica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPractica } from './entities/tipo-practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPractica])],
  controllers: [TipoPracticaController],
  providers: [TipoPracticaService],
})
export class TipoPracticaModule {}
