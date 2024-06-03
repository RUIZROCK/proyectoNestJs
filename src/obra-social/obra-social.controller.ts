import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObraSocialService } from './obra-social.service';
import {
  CreateObraSocialDto,
  UpdateObraSocialDto,
} from './dto/obra-social.dto';

@Controller('obra-social')
export class ObraSocialController {
  constructor(private readonly obraSocialService: ObraSocialService) {}

  @Post()
  create(@Body() cObraSocial: CreateObraSocialDto) {
    return this.obraSocialService.create(cObraSocial);
  }

  @Get()
  findAll() {
    return this.obraSocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.obraSocialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() uObraSocial: UpdateObraSocialDto) {
    return this.obraSocialService.update(id, uObraSocial);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.obraSocialService.remove(id);
  }
}
