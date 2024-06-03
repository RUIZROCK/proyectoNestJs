import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto, UpdatePacienteDto } from './dto/paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() cPaciente: CreatePacienteDto) {
    return this.pacienteService.create(cPaciente);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get('verPaciente')
  findOne(
    @Query() dni: number,
    consulta: boolean,
    practica: boolean,
    desde: Date,
    hasta: Date,
  ) {
    return this.pacienteService.findOneWithHistory(
      dni,
      consulta,
      practica,
      desde,
      hasta,
    );
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() uPaciente: UpdatePacienteDto) {
    return this.pacienteService.update(id, uPaciente);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pacienteService.remove(id);
  }
}
