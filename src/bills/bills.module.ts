import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillRepository } from './bill.repository';

@Module({
    imports:[TypeOrmModule.forFeature([BillRepository])]
})
export class BillsModule {}
