import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadController } from './enfermedad.controller';
import { Enfermedad } from './entities/enfermedad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Enfermedad])],
  controllers: [EnfermedadController],
  providers: [EnfermedadService],
})
export class EnfermedadModule {}
