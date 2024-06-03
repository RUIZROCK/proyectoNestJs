import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  //UseGuards,
} from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDto, UpdateMedicoDto } from './dto/medico.dto';
import { AuthGuard } from 'src/auth/guards/access-token.guard';
import { User } from './medico.decorator';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() cMedico: CreateMedicoDto, @User() usuario: any) {
    if (
      usuario.rol.includes('Administrador') ||
      usuario.rol.includes('Secretario')
    ) {
      return this.medicoService.create(cMedico);
    }
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.medicoService.findOne(id);
  }

  @Patch(':id')
  //@UseGuards(AuthGuard)
  update(@Param('id') id: number, @Body() uMedico: UpdateMedicoDto) {
    return this.medicoService.update(id, uMedico);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard)
  remove(@Param('id') id: number) {
    return this.medicoService.remove(id);
  }
}
