"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const config = require("config");
async function bootstrap() {
    const serverConfig = config.get('server');
    const logger = new common_1.Logger('bootstrap');
    const port = process.env.PORT || serverConfig.port;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Botminds-Blockchain reader micro-service')
        .setDescription('This micro-service reads btc blockchain data from mainnet via Tantum ')
        .setVersion('0.0.1')
        .addTag('btc')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(port);
    logger.verbose(`Application listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map