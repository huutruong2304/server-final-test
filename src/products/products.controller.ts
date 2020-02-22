import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductsService){}

    @Get()
    getAllProducts(@Body() getProductsFilterDto:GetProductsFilterDto):Promise<Product[]>{
        return this.productsService.getProducts(getProductsFilterDto);
    }
    @Get('/new')
    getNewProduct():Promise<Product[]>{
        return this.productsService.getNewProducts();
    }

    @Get('/:id')
    getProductById(@Param('id',ParseIntPipe)  id:number ): Promise<Product>{
        return this.productsService.getProductById(id);
    }


    @Post()
    createProduct(@Body() createProductDto: CreateProductDto):Promise<Product>{
        return this.productsService.createProduct(createProductDto);
    }

    @Delete('/:id')
    deleteProduct(@Param('id',ParseIntPipe) id:number):Promise<Object>{
        return this.productsService.deleteProduct(id);
    }

}
