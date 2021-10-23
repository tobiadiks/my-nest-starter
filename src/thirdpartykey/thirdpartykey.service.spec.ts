import { Test, TestingModule } from '@nestjs/testing';
import { ThirdpartykeyService } from './thirdpartykey.service';

describe('ThirdpartykeyService', () => {
  let service: ThirdpartykeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdpartykeyService],
    }).compile();

    service = module.get<ThirdpartykeyService>(ThirdpartykeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
