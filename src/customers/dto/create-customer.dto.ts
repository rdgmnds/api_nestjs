import { IsString, IsEmail, MinLength, IsPhoneNumber } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @MinLength(5)
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber("BR")
    phone: string;

    @IsString()
    location: string;
}