import { Controller, Get } from '@nestjs/common';
import { ConstructionStageService } from './construction-stage.service';

@Controller()
export class ConstructionStageController {
  constructor(private readonly constructionStageService: ConstructionStageService) {}

  @Get()
  getHello(): string {
    return this.constructionStageService.getHello();
  }
}
