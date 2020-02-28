import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { CategoriesService } from 'src/categories/categories.service';
import { CategoryRepository } from 'src/categories/category.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository,CategoryRepository]),
    UsersModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService,CategoriesService]
})
export class ProductsModule {}
