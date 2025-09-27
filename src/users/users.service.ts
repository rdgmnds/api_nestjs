import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    return this.databaseService.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        sector: {
          create: {
            name: "Engenharia"
          }
        }
    }});
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        sector: {
          update: {
            name: "Desenvolvimento"
          }
        }
      }
    })
  }

  async remove(id: string) {
    return this.databaseService.user.delete({
      where: {
        id,
      }
    })
  }

}
