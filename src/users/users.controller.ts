/* eslint-disable @typescript-eslint/no-empty-object-type */

// ParseIntPipe serve para validar o tipo de dado. Ele atua como middleware.
// ValidationPipe serve para ativar a validação

import { Body, Controller, Get, Post, Patch, Param, Query, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {} // chama o service

  @Get() // GET '/users' ou '/users?profissao=value'
  findAll(
    @Query('occupation') occupation?: 'Programador' | 'Técnico' | 'Suporte') {
    return this.usersService.findAll(occupation);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.updated(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

}
