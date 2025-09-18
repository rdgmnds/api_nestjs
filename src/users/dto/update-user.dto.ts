// instalar PartialType: npm i @nestjs/mapped-types -D

import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types"

export class UpdateUserDto extends PartialType(CreateUserDto) {}