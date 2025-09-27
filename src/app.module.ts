import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ThrottlerModule.forRoot([{
      name: "short",
      ttl: 1000,
      limit: 3,
    },
  {
      name: "long",
      ttl: 60000,
      limit: 100,
    }]),
    ProductsModule,
    CategoriesModule,
    CustomersModule,
    OrdersModule, // limitar taxa de requisições
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class AppModule {}

// instalar throttler: npm i @nestjs/throttler
