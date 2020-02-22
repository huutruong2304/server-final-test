import { Category } from "src/categories/category.entity";

export class CreateProductDto {
    name: string;
    usualPrice: number;
    discount: number;
    urlImage: string;
    description: string;
    qty: number;
    categoryId: number;
    category:Category
}