import * as sendMail from '@sendgrid/mail'
import { SendMailDto } from 'src/users/dto/send-mail.dto';

export class SendMail{
    private host:string = 'abc.nht.xyz@gmail.com';
    constructor(){
        sendMail.setApiKey('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');
    }

    sendMsg(sendMailDto: SendMailDto):void{
        const {user } = sendMailDto;
        const msg =  {
            to: user,
            from: this.host,
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sendMail.send(msg);
    }

}



