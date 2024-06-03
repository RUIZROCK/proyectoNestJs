import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto, UpdateConsultaDto } from './dto/consulta.dto';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(@Body() cConsulta: CreateConsultaDto) {
    return this.consultaService.create(cConsulta);
  }

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.consultaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() uConsulta: UpdateConsultaDto) {
    return this.consultaService.update(id, uConsulta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.consultaService.remove(id);
  }
}
