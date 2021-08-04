import { NestFactory } from '@nestjs/core';
import { ConstructionStageModule } from './construction-stage.module';

async function bootstrap() {
  const app = await NestFactory.create(ConstructionStageModule);
  await app.listen(3000);
}
bootstrap();
