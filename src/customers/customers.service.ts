import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.databaseService.customer.create({
      data: createCustomerDto,
    });
  }

  async findAll() {
    return this.databaseService.customer.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.customer.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.databaseService.customer.update({
      where: {
        id,
      },
      data: updateCustomerDto,
    })
  }

  async remove(id: string) {
    return this.databaseService.customer.delete({
      where: {
        id,
      }
    })
  }
  
}
