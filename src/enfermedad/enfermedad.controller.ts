import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { CreateEnfermedadDto, UpdateEnfermedadDto } from './dto/enfermedad.dto';

@Controller('enfermedad')
export class EnfermedadController {
  constructor(private readonly enfermedadService: EnfermedadService) {}

  @Post()
  create(@Body() createEnfermedadDto: CreateEnfermedadDto) {
    return this.enfermedadService.create(createEnfermedadDto);
  }

  @Get()
  findAll() {
    return this.enfermedadService.findAll();
  }

  @Get('porId/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.enfermedadService.findOne(id);
  }

  @Get('buscar')
  async findOneForName(@Query('nombre') nombre: string) {
    console.log(nombre);
    return await this.enfermedadService.findForNameIncomplete(nombre);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnfermedadDto: UpdateEnfermedadDto,
  ) {
    return this.enfermedadService.update(+id, updateEnfermedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermedadService.remove(+id);
  }
}
