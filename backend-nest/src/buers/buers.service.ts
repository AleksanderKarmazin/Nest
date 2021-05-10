import { Injectable } from '@nestjs/common';
import { CreateBuerDto } from './dto/create-buer.dto';
import { UpdateBuerDto } from './dto/update-buer.dto';

@Injectable()
export class BuersService {
  create(createBuerDto: CreateBuerDto) {
    return 'This action adds a new buer';
  }

  findAll() {
    return `This action returns all buers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buer`;
  }

  update(id: number, updateBuerDto: UpdateBuerDto) {
    return `This action updates a #${id} buer`;
  }

  remove(id: number) {
    return `This action removes a #${id} buer`;
  }
}
