import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async getAllUser():Promise<User[]>{
        const users = await this.userRepository.find();
        return users;
    }

    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn( authSignInDto:AuthSignInDto):Promise<{accessToken:string}>{
        const email = await this.userRepository.validateUserPassword(authSignInDto);

        if(!email){
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload:JwtPayload = {email};

        const accessToken = await this.jwtService.sign(payload);

        return {accessToken};
    }


}
