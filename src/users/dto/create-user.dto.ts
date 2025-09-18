/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNumber, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsEnum(["Programador", "Técnico", "Suporte"], {
        message: "Campo obrigatório"
    })
    occupation: "Programador" | "Técnico" | "Suporte";
}