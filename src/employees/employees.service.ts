import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    })
  }

  async findAll(occupation?: "Programador" | "Técnico" | "Suporte") {
    if (occupation) return this.databaseService.employee.findMany({
      where: {
        occupation,
      }
    });
    return this.databaseService.employee.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,  
  })
  }

  async remove(id: string) {
    return this.databaseService.employee.delete({
      where: {
        id,
      }
    })
  }
}
