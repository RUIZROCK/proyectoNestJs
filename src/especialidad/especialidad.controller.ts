import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';
import {
  CreateEspecialidadDto,
  UpdateEspecialidadDto,
} from './dto/especialidad.dto';

@Controller('especialidad')
export class EspecialidadController {
  constructor(private readonly especialidadService: EspecialidadService) {}

  @Post()
  create(@Body() cEspecialidad: CreateEspecialidadDto) {
    return this.especialidadService.create(cEspecialidad);
  }

  @Get()
  findAll() {
    return this.especialidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.especialidadService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() uEspecialidad: UpdateEspecialidadDto,
  ) {
    return this.especialidadService.update(id, uEspecialidad);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.especialidadService.remove(id);
  }
}
