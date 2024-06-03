import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoPracticaService } from './tipo-practica.service';
import {
  CreateTipoPracticaDto,
  UpdateTipoPracticaDto,
} from './dto/tipo-practica.dto';

@Controller('tipo-practica')
export class TipoPracticaController {
  constructor(private readonly tipoPracticaService: TipoPracticaService) {}

  @Post()
  create(@Body() createTipoPracticaDto: CreateTipoPracticaDto) {
    return this.tipoPracticaService.create(createTipoPracticaDto);
  }

  @Get()
  findAll() {
    return this.tipoPracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoPracticaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoPracticaDto: UpdateTipoPracticaDto,
  ) {
    return this.tipoPracticaService.update(+id, updateTipoPracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoPracticaService.remove(+id);
  }
}
