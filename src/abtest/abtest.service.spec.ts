import { Test, TestingModule } from '@nestjs/testing';
import { AbtestService } from './abtest.service';

describe('AbtestService', () => {
  let service: AbtestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbtestService],
    }).compile();

    service = module.get<AbtestService>(AbtestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
