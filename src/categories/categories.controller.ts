import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }

    @Get()
    getAllCategories() {
        return this.categoriesService.getAllCategory();
    }

    @Get('/:id')
    getCategoryById(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.getCategoryById(id);
    }

    @Post()
    // @UseGuards(AuthGuard())
    createCategory(@Body('name') name: string) {
        return this.categoriesService.createCategory(name);
    }

    @Delete('/:id')
    // @UseGuards(AuthGuard())
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.deleteCategory(id);
    }
}
