import { PrimaryGeneratedColumn, Column, OneToMany, Entity, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Product } from "src/products/product.entity";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt:Date;

    @OneToMany(type=>Product,product=>product.category)
    products: Product[];

}
