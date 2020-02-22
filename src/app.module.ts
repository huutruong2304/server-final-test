import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { BillsModule } from './bills/bills.module';
import { BillDetailsModule } from './bill-details/bill-details.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    CategoriesModule,
    UsersModule,
    BillsModule,
    BillDetailsModule
  ]
})
export class AppModule { }
