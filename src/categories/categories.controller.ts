import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService:CategoriesService){}

    @Get()
    getAllCategories(){
        return this.categoriesService.getAllCategory();
    }

    @Get('/:id')
    getCategoryById(@Param('id',ParseIntPipe) id:number){
        return this.categoriesService.getCategoryById(id);
    }

    @Post()
    createCategory(@Body('name') name: string){
        return this.categoriesService.createCategory(name);
    }

    @Delete('/:id')
    deleteCategory(@Param('id',ParseIntPipe) id:number){
        return this.categoriesService.deleteCategory(id);
    }
}
