import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as  bcrypt from 'bcrypt';
import { AuthSignInDto } from "./dto/auth-signin.dto";
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(authCredentailsDto: AuthCredentialsDto): Promise<void> {
        const { username, password, email } = authCredentailsDto;

        const user = new User();

        user.email = email;
        user.username = username;
        
        user.password = await this.hashPassword(password) ;

        try {
            await user.save();
        } catch (error) {
            if(error.code ='ER_DUP_ENTRY'){
                throw new ConflictException('Email already exists');
            }else{
                throw new InternalServerErrorException('')
            }
        }
    }

    async validateUserPassword(authSignInDto:AuthSignInDto):Promise<string>{
        const {email,password} = authSignInDto;
        const user = await this.findOne({email});

        if(user && user.validatePassword(password)){
            return user.email;
        } else {
            return null;
        }
    }

    private async hashPassword(password:string):Promise<string>{
        return await bcrypt.hash(password,10);
    }
}
