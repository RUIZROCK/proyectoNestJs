import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateEnfermedadDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}
export class UpdateEnfermedadDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}
