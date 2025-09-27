import { IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(5)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    sector: string;
}
