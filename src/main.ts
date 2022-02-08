import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as config from 'config';


async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const port = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Botminds-Blockchain reader micro-service')
    .setDescription('This micro-service reads btc blockchain data from mainnet via Tantum ')
    .setVersion('0.0.1')
    .addTag('btc')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
  logger.verbose(`Application listening on port ${port}`);
}

bootstrap();
