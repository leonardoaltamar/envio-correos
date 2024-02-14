import nodemailer from 'nodemailer';
import { envs } from '../../config/env.plugin';


interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachement[];

}

interface Attachement {
    filename: string;
    path: string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    constructor(
         
    ){}

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachements } = options;

        try {

            const sendInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements
            })

            console.log(sendInformation);

            return true;
        } catch (error) {
            return false;
        }

    }

    async sendEmailWithFileSystem(to: string | string[]) {
        const subject = 'Correo servidor';
        const htmlBody = `
            <h2>JEISSOOON</h2>
            <p>estoy practicando ey</p>
            <p>Creando scripts de correos pa probar yo mismo mi</p>
        `

        try {
            const attachements : Attachement[] = [
                /* { filename: 'logs-all.log', path: './logs/logs-all.log' },
                { filename: 'logs-high.log', path: './logs/logs-high.log' },
                { filename: 'logs-medium.log', path: './logs/logs-medium.log' } */
            ]
    
            const sendInformation = await this.sendEmail({to, subject,attachements,htmlBody});
    
            return true
            
        } catch (error) {
            return false;
        }

    }
}