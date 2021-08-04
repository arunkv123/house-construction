import { Controller, Get } from '@nestjs/common';
import { ConstructionEstimateService } from './construction-estimate.service';

@Controller()
export class ConstructionEstimateController {
  constructor(private readonly constructionEstimateService: ConstructionEstimateService) {}

  @Get()
  getHello(): string {
    return this.constructionEstimateService.getHello();
  }
}
