import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { SendMail } from 'src/utils/sendEmail';
import { UsersService } from './users.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [UsersController],
    providers: [SendMail, UsersService]
})
export class UsersModule {}
