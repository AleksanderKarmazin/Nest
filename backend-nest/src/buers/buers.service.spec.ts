import { Test, TestingModule } from '@nestjs/testing';
import { BuersService } from './buers.service';

describe('BuersService', () => {
  let service: BuersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuersService],
    }).compile();

    service = module.get<BuersService>(BuersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
