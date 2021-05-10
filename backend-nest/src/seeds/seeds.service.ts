import { Injectable } from '@nestjs/common';
import { CreateSeedInput } from './dto/create-seed.input';
import { UpdateSeedInput } from './dto/update-seed.input';

@Injectable()
export class SeedsService {
  create(createSeedInput: CreateSeedInput) {
    return 'This action adds a new seed';
  }

  findAll() {
    return `This action returns all seeds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seed`;
  }

  update(id: number, updateSeedInput: UpdateSeedInput) {
    return `This action updates a #${id} seed`;
  }

  remove(id: number) {
    return `This action removes a #${id} seed`;
  }
}
