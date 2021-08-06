import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://full_access:s3crEt@192.168.18.19:5672/hello'],
      queue: 'nestjs-microservices',
      queueOptions: {
        durable: true
      },
    },
  });
  app.startAllMicroservices();
}
bootstrap();
