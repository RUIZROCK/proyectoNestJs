import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PracticaService } from './practica.service';
import { CreatePracticaDto, UpdatePracticaDto } from './dto/practica.dto';

@Controller('practica')
export class PracticaController {
  constructor(private readonly practicaService: PracticaService) {}

  @Post()
  create(@Body() cPractica: CreatePracticaDto) {
    return this.practicaService.create(cPractica);
  }

  @Get()
  findAll() {
    return this.practicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.practicaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() uPractica: UpdatePracticaDto) {
    return this.practicaService.update(id, uPractica);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.practicaService.remove(id);
  }
}
