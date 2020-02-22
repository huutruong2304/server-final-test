import { IsString, MinLength, MaxLength, IsEmail, Matches } from 'class-validator'

export class AuthSignInDto {

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'Password too weak' }
    )
    password: string;

    @IsEmail()
    email: string;
}