import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  CreateEntradaDto,
  UpdateEntradaDto,
} from 'src/entrada/dto/entrada.dto';

export class CreatePracticaDto extends CreateEntradaDto {
  @IsNumberString()
  @IsNotEmpty()
  duracion: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  complicaciones: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(250)
  resultado: string;
}

export class UpdatePracticaDto extends UpdateEntradaDto {
  @IsNumberString()
  @IsNotEmpty()
  duracion: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  complicaciones: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(250)
  resultado: string;
}
