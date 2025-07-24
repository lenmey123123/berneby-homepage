import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class QuickConnectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsString()
  @IsNotEmpty()
  message: string;
} 