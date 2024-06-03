import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTipoPracticaDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}
export class UpdateTipoPracticaDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}
