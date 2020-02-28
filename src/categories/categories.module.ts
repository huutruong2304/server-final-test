import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports:[
        TypeOrmModule.forFeature([CategoryRepository]),
        UsersModule
    ],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}
