import { Test, TestingModule } from '@nestjs/testing';
import { BuersController } from './buers.controller';
import { BuersService } from './buers.service';

describe('BuersController', () => {
  let controller: BuersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuersController],
      providers: [BuersService],
    }).compile();

    controller = module.get<BuersController>(BuersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
