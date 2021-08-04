import { NestFactory } from '@nestjs/core';
import { ConstructionEstimateModule } from './construction-estimate.module';

async function bootstrap() {
  const app = await NestFactory.create(ConstructionEstimateModule);
  await app.listen(3000);
}
bootstrap();
