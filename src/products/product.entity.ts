import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, OneToMany } from "typeorm"
import { Category } from "src/categories/category.entity";
import { type } from "os";
import { BillDetail } from "src/bill-details/bill-detail.entity";


@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    usualPrice: number;
    @Column()
    discount:number;
    @Column()
    urlImage: string;   
    @Column()
    description: string;
    @Column()
    qty:number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt:Date;
    @ManyToOne(type=>Category, category=>category.products)
    category: Category;

    @OneToMany(type=>BillDetail,billDetail=>billDetail.product)
    billDetails: BillDetail[];
};