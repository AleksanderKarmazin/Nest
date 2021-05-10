import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SeedsService } from './seeds.service';
import { CreateSeedInput } from './dto/create-seed.input';
import { UpdateSeedInput } from './dto/update-seed.input';

@Resolver('Seed')
export class SeedsResolver {
  constructor(private readonly seedsService: SeedsService) {}

  @Mutation('createSeed')
  create(@Args('createSeedInput') createSeedInput: CreateSeedInput) {
    return this.seedsService.create(createSeedInput);
  }

  @Query('seeds')
  findAll() {
    return this.seedsService.findAll();
  }

  @Query('seed')
  findOne(@Args('id') id: number) {
    return this.seedsService.findOne(id);
  }

  @Mutation('updateSeed')
  update(@Args('updateSeedInput') updateSeedInput: UpdateSeedInput) {
    return this.seedsService.update(updateSeedInput.id, updateSeedInput);
  }

  @Mutation('removeSeed')
  remove(@Args('id') id: number) {
    return this.seedsService.remove(id);
  }
}
