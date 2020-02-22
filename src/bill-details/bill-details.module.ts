import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillDetail } from './bill-detail.entity';
import { BillDetailRepository } from './bill-detail.repository';

@Module({
    imports:[
        TypeOrmModule.forFeature([BillDetailRepository])
    ]
})
export class BillDetailsModule {}
