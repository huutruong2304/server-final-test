import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { SendMail } from 'src/utils/sendEmail';
import { UsersService } from './users.service';
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports:[
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret:'nguoidanongmanhme',
            signOptions:{
                expiresIn: 3600
            }
        }),
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [UsersController],
    providers: [
        SendMail,
        UsersService,
        JwtStrategy
    ],
    exports:[
        JwtStrategy,
        PassportModule
    ]
})
export class UsersModule {}
