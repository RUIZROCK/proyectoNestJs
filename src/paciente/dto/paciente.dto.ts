import {
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Consulta } from 'src/consulta/entities/consulta.entity';
import { ObraSocial } from 'src/obra-social/entities/obra-social.entity';
import { Practica } from 'src/practica/entities/practica.entity';

export class CreatePacienteDto {
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
  dni: number;

  @IsNotEmpty()
  @IsDateString()
  fechaNac: Date;

  @IsNotEmpty()
  obraSocial: ObraSocial;

  entrada: (Consulta | Practica)[];
}

export class UpdatePacienteDto {
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
  dni: number;

  @IsNotEmpty()
  @IsDateString()
  fechaNac: Date;

  @IsNotEmpty()
  obraSocial: ObraSocial;

  entrada: (Consulta | Practica)[];
}
