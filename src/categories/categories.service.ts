import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository
    ){}

    async getAllCategory():Promise<Category[]>{
        const categories = this.categoryRepository.find();
        return categories;
    }

    async getCategoryById(id:number):Promise<Category>{
        const category = await this.categoryRepository.findOne(id);

        if(!category){
            throw new NotFoundException(`Category with ID: ${id} not found`);
        }

        return category;
    }

    async createCategory(name:string):Promise<Category>{
       return this.categoryRepository.createCategory(name);
    }

    async deleteCategory(id:number):Promise<Object>{
        const result = await this.categoryRepository.delete(id);

        if(result.affected==0){
            throw new NotFoundException(`Category with ID: ${id} not found`);
        }
        return { message: `Category with ID: ${id} was deleted`};
    }

}
