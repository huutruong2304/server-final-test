import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { CategoryRepository } from 'src/categories/category.repository';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
        // @InjectRepository(CategoryRepository)
        // private categoryRepository: CategoryRepository,
        private categoryService:CategoriesService
    ) { }

    async getProducts(getProductsFilterDto:GetProductsFilterDto):Promise<Product[]>{
        return this.productRepository.getProducts(getProductsFilterDto);
    }


    async getNewProducts():Promise<Product[]>{
        const query = this.productRepository.createQueryBuilder('product');

        query.orderBy('product.createdAt','DESC');

        const products = await query.getMany();
        return products;
    }

    async getProductById(id: number): Promise<Product> {
        const found = await this.productRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Product with ID: ${id} not found`);
        }
        
        // const products = await this.productRepository.find({relations: ["category"]})

        // console.log(products);

        return found;
    }

    async createProduct(createProductDto: CreateProductDto):Promise<Product>{
        const category = await this.categoryService.getCategoryById(createProductDto.categoryId);
        if(!category){
            throw new NotFoundException(`Category with ID: ${createProductDto.categoryId} not found`);
        }
        createProductDto.category = category;
        return this.productRepository.createProduct(createProductDto);
    }

    async deleteProduct(id:number):Promise<Object>{
        const result = await this.productRepository.delete(id);
        
        if(result.affected===0){
            throw new NotFoundException(`Task with ID: ${id} not found  `);
        }
        return { message: `Product with ID: ${id} was deleted`};
    }
}