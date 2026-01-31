import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API_RAICES_V1')
    .setDescription('API RESTful para la aplicación móvil Raices - Gestión de rutas, gastronomia y servicios turísticos en Pueblos Mágicos de México.')
    .setVersion('1.0')
    .addTag('raices')
    .build();

  // Crear el documento OpenAPI una vez
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Import dinámico para paquetes ESM desde CommonJS (evita ERR_REQUIRE_ESM)
  const { apiReference } = await import('@scalar/nestjs-api-reference');
  app.use('/docs', apiReference({ content: document }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
