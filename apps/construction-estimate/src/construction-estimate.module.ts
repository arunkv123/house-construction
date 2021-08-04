import { Module } from '@nestjs/common';
import { ConstructionEstimateController } from './construction-estimate.controller';
import { ConstructionEstimateService } from './construction-estimate.service';

@Module({
  imports: [],
  controllers: [ConstructionEstimateController],
  providers: [ConstructionEstimateService],
})
export class ConstructionEstimateModule {}
