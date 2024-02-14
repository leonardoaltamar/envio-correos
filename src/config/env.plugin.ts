import 'dotenv/config';
import * as env from 'env-var'


export const envs = {

    MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
    
}
