import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const fs = require('fs');
    const vlPathClient:string = join(process.cwd(), 'src/client/config/front.env.js');
    const vlContainer:boolean = process.env.CONTAINER === 'true' ? true : false;
    
    let vlAppHost = process.env.APP_HOST;
    let vlAppPort:number = 5000;
    let vlListenPort:number = 5000;

    if (!vlContainer) {
        vlAppPort = process.env.APP_PORT;
        vlListenPort = process.env.APP_PORT;
    } else {
        vlAppPort = process.env.APP_PORT;
    };

    try {
    var logger = fs.createWriteStream(vlPathClient);
        logger.write(`window._env_ = {API:"http://${vlAppHost}:${vlAppPort}/graphql"}`);
    } catch (err) {
        console.error(err);
    }

    await app.listen(vlListenPort);

    console.log(`HOST = ${vlAppHost}`);
    console.log(`PORT = ${vlAppPort}`);
    console.log(`API: http://${vlAppHost}:${vlAppPort}/graphql`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

}
bootstrap();
