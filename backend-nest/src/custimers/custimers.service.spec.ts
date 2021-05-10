import { Test, TestingModule } from '@nestjs/testing';
import { CustimersService } from './custimers.service';

describe('CustimersService', () => {
  let service: CustimersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustimersService],
    }).compile();

    service = module.get<CustimersService>(CustimersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
