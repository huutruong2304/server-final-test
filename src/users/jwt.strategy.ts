import {PassportStrategy} from '@nestjs/passport';
import {Strategy,ExtractJwt} from 'passport-jwt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:'nguoidanongmanhme',
           
          });
    }

    async validate(payload: JwtPayload):Promise<User>{
        const {email} = payload;
        const user = await this.userRepository.findOne({email});

        if(!user){
            throw new UnauthorizedException();
        }

        return user;

    }


}