import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrdersService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createOrderDto: Prisma.OrderCreateInput) {
    return this.databaseService.order.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return this.databaseService.order.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.order.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: string, updateOrderDto: Prisma.OrderUpdateInput) {
    return this.databaseService.order.update({
      where: {
        id,
      },
      data: updateOrderDto,
    })
  }

  async remove(id: string) {
    return this.databaseService.order.delete({
      where: {
        id,
      }
    })
  }
  
}
