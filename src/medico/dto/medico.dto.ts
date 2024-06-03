import {
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';

export class CreateMedicoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(3)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(3)
  apellido: string;

  @IsNotEmpty()
  @IsNumberString()
  matricula: string;

  @IsNotEmpty()
  @IsDateString()
  fechaIngreso: Date;

  @IsNotEmpty()
  especialidad: Especialidad;
}

export class UpdateMedicoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(3)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(3)
  apellido: string;

  @IsNotEmpty()
  @IsNumberString()
  matricula: string;

  @IsNotEmpty()
  @IsDateString()
  fechaIngreso: Date;

  @IsNotEmpty()
  especialidad: Especialidad;
}
