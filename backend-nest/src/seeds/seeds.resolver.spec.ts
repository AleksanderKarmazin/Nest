import { Test, TestingModule } from '@nestjs/testing';
import { SeedsResolver } from './seeds.resolver';
import { SeedsService } from './seeds.service';

describe('SeedsResolver', () => {
  let resolver: SeedsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedsResolver, SeedsService],
    }).compile();

    resolver = module.get<SeedsResolver>(SeedsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
