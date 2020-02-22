import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { AuthSignInDto } from './dto/auth-signin.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) { }

    async getAllUser():Promise<User[]>{
        const users = await this.userRepository.find();
        return users;
    }

    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn( authSignInDto:AuthSignInDto):Promise<string>{
        const user = await this.userRepository.validateUserPassword(authSignInDto);

        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }


}
