import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()  
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  country: string;
}