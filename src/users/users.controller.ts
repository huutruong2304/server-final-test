import { Controller, Post, Body, ValidationPipe, Get, UseGuards, Req } from '@nestjs/common';
import { SendMail } from 'src/utils/sendEmail';
import { SendMailDto } from './dto/send-mail.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersService } from './users.service';
import { AuthSignInDto } from './dto/auth-signin.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(
        private sendMail: SendMail,
        private usersService: UsersService
    ) { }


    @Get()
    getAllUsers(){
        return this.usersService.getAllUser();
    }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
        return this.usersService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authSignInDto:AuthSignInDto):Promise<{accessToken:string}> {
        return this.usersService.signIn(authSignInDto);
    }


    @Post('/send-mail-greeting')
    sendMailGreeting(@Body() sendMailDto: SendMailDto) {
        this.sendMail.sendMsg(sendMailDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req ){
        console.log(req.user);
    }

 

}
