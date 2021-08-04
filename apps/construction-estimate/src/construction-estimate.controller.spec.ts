import { Test, TestingModule } from '@nestjs/testing';
import { ConstructionEstimateController } from './construction-estimate.controller';
import { ConstructionEstimateService } from './construction-estimate.service';

describe('ConstructionEstimateController', () => {
  let constructionEstimateController: ConstructionEstimateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConstructionEstimateController],
      providers: [ConstructionEstimateService],
    }).compile();

    constructionEstimateController = app.get<ConstructionEstimateController>(ConstructionEstimateController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(constructionEstimateController.getHello()).toBe('Hello World!');
    });
  });
});
