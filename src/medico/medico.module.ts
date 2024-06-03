import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Medico]), AuthModule],
  controllers: [MedicoController],
  providers: [MedicoService],
  exports: [MedicoService],
})
export class MedicoModule {}
