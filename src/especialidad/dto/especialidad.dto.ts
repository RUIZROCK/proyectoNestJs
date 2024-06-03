import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateEspecialidadDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}

export class UpdateEspecialidadDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}
