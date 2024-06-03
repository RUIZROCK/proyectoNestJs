import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Enfermedad } from 'src/enfermedad/entities/enfermedad.entity';
import {
  CreateEntradaDto,
  UpdateEntradaDto,
} from 'src/entrada/dto/entrada.dto';

export class CreateConsultaDto extends CreateEntradaDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  motivo: string;

  @IsNotEmpty()
  diagnostico: Enfermedad;

  @IsBoolean()
  confirmacion: boolean;
}

export class UpdateConsultaDto extends UpdateEntradaDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  motivo: string;

  @IsNotEmpty()
  diagnostico: Enfermedad;

  @IsBoolean()
  confirmacion: boolean;
}
