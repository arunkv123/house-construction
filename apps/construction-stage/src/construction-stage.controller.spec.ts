import { Test, TestingModule } from '@nestjs/testing';
import { ConstructionStageController } from './construction-stage.controller';
import { ConstructionStageService } from './construction-stage.service';

describe('ConstructionStageController', () => {
  let constructionStageController: ConstructionStageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConstructionStageController],
      providers: [ConstructionStageService],
    }).compile();

    constructionStageController = app.get<ConstructionStageController>(ConstructionStageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(constructionStageController.getHello()).toBe('Hello World!');
    });
  });
});
