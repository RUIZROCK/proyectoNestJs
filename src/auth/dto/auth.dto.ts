import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  password: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  mail: string;
}

export class RegisterAuthDto {
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  username: string;

  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  @IsString()
  rol: string;
}
