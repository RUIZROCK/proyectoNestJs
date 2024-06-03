import { IsNotEmpty } from 'class-validator';
import { Medico } from 'src/medico/entities/medico.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';

export class CreateEntradaDto {
  @IsNotEmpty()
  idHistoriaClinica: number;

  @IsNotEmpty()
  idMedico: Medico;

  @IsNotEmpty()
  idPaciente: Paciente;
}
export class UpdateEntradaDto {
  @IsNotEmpty()
  idHistoriaClinica: number;

  @IsNotEmpty()
  idMedico: Medico;

  @IsNotEmpty()
  idPaciente: Paciente;
}
