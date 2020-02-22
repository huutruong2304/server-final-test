import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { type } from "os";
import { User } from "src/users/user.entity";
import { BillDetail } from "src/bill-details/bill-detail.entity";

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    total: number;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt:Date;
    
    @ManyToOne(type=>User,user=>user.bills)
    user: User;

    @OneToMany(type=>BillDetail,billDetail=>billDetail.bill)
    billDetails: BillDetail[];
}