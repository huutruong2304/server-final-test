import { Repository, EntityRepository } from "typeorm";
import {Product} from './product.entity'
import { CreateProductDto } from "./dto/create-product.dto";
import { GetProductsFilterDto } from "./dto/get-products-filter.dto";

@EntityRepository(Product)
export class ProductRepository  extends Repository<Product>{
    
    async getProducts(getProductsFilterDto:GetProductsFilterDto):Promise<Product[]>{
        const {categoryId,discount,search,sort} = getProductsFilterDto;
        const query = this.createQueryBuilder('product');

        if(categoryId){
            query.andWhere('product.categoryId = :categoryId', {categoryId});
        }

        if(discount===true){
            query.andWhere('product.discount > 0');
        }

        // if(search){
        //     query.andWhere('product.name LIKE :search  OR product.description LIKE :search',{search: `%${search}%` });
        // }   

        if(sort){
            query.orderBy('product.usualPrice', sort);
        }

        const products = await query.getMany();
        return products;
    }




    async createProduct(createProductDto:CreateProductDto):Promise<Product>{
        const {name,usualPrice,discount,urlImage,qty,category,description}=createProductDto;
        const product = new Product();
        product.name = name;
        product.usualPrice = usualPrice;
        product.discount = discount;
        product.urlImage = urlImage;
        product.description = description;
        product.qty = qty;
        // console.log(category);
        product.category = category;
        await product.save();
        return product;
    }
    
}