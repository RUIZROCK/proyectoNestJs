import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  username: string;
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
export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  username: string;
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
