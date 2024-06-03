import { Module } from '@nestjs/common';
import { ObraSocialService } from './obra-social.service';
import { ObraSocialController } from './obra-social.controller';
import { ObraSocial } from './entities/obra-social.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ObraSocial])],
  controllers: [ObraSocialController],
  providers: [ObraSocialService],
  exports: [ObraSocialService],
})
export class ObraSocialModule {}
