import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, Unique } from "typeorm";
import { type } from "os";
import { Bill } from "src/bills/bill.entity";
import * as  bcrypt from 'bcrypt';


@Entity()
@Unique(['email'])
export class User  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @Column()
    username:string;

    @Column()
    password:string;



    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt:Date;

    @OneToMany(type=>Bill,bill=>bill.user)
    bills: Bill[];

    async validatePassword(password:string):Promise<boolean>{
        return await bcrypt.compare(password,this.password);
    }

}