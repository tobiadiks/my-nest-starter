import { Test, TestingModule } from '@nestjs/testing';
import { AbtestController } from './abtest.controller';

describe('AbtestController', () => {
  let controller: AbtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbtestController],
    }).compile();

    controller = module.get<AbtestController>(AbtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
