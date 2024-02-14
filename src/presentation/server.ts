import { EmailService } from "./email/email.service";
import { htmlBody } from "./email/template-email";

const emailService = new EmailService();

export class Server{
    static start(){
        console.log('server started...');

        emailService.sendEmail({
            to: 'leonardoaltamar12@gmail.com', /* correo a destinatario, si se quieren mandar varios correos solo hay que mandarle un array ex: [email@gmail.com, email2@gmail.com] */
            subject: 'envio de correo', /* titulo del correo */
            htmlBody: htmlBody
        })
    }
}