import { Module } from '@nestjs/common';
import { ConstructionStageController } from './construction-stage.controller';
import { ConstructionStageService } from './construction-stage.service';

@Module({
  imports: [],
  controllers: [ConstructionStageController],
  providers: [ConstructionStageService],
})
export class ConstructionStageModule {}
