import { IsString, IsEmail, IsArray, IsOptional, IsNotEmpty } from 'class-validator';

export class BlueprintDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsArray()
  @IsString({ each: true })
  features: string[];

  @IsString()
  @IsOptional()
  message?: string;
} 