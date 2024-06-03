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
import { EntradaService } from './entrada.service';
import { CreateEntradaDto, UpdateEntradaDto } from './dto/entrada.dto';

@Controller('entrada')
export class EntradaController {
  constructor(private readonly entradaService: EntradaService) {}

  @Post()
  create(@Body() cEntrada: CreateEntradaDto) {
    return this.entradaService.create(cEntrada);
  }

  @Get()
  findAll() {
    return this.entradaService.findAllForShow();
  }

  @Get('listaEMP')
  findAllForShow(
    @Query() tipo: string,
    desde: Date,
    hasta: Date,
    matricula: string,
    especialidad: string,
    fechaBaja: boolean,
    obraSocial: string,
    diagnostico: string,
    complicacion: boolean,
  ) {
    return this.entradaService.findAllWithFilters(
      tipo,
      desde,
      hasta,
      matricula,
      especialidad,
      fechaBaja,
      obraSocial,
      diagnostico,
      complicacion,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.entradaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() uEntrada: UpdateEntradaDto) {
    return this.entradaService.update(id, uEntrada);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.entradaService.remove(id);
  }
}
