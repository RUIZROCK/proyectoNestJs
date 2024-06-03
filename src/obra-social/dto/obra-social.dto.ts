import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateObraSocialDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}

export class UpdateObraSocialDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nombre: string;
}
