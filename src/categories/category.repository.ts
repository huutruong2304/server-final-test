import { Repository, Entity, EntityRepository } from "typeorm";
import { Category } from "./category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    async createCategory(name:string):Promise<Category>{
        const category = new Category();
        category.name = name;

        await  category.save();

        return category;
    }
}