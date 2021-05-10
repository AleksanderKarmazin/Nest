import { Test, TestingModule } from '@nestjs/testing';
import { CustimersController } from './custimers.controller';
import { CustimersService } from './custimers.service';

describe('CustimersController', () => {
  let controller: CustimersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustimersController],
      providers: [CustimersService],
    }).compile();

    controller = module.get<CustimersController>(CustimersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
