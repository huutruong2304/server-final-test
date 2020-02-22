import { PrimaryGeneratedColumn, Entity, UpdateDateColumn, CreateDateColumn, ManyToOne, Column } from "typeorm"
import { Bill } from "src/bills/bill.entity";
import { Product } from "src/products/product.entity";

@Entity()
export class BillDetail{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    qty: number;

    @Column()
    amount: number;

    @CreateDateColumn() 
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(type=>Bill,bill=>bill.billDetails)
    bill: Bill;

    @ManyToOne(type=>Product,product=>product.billDetails)
    product: Product;
    

}