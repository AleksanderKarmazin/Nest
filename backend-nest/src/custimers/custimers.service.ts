import { Injectable } from '@nestjs/common';
import { CreateCustimerDto } from './dto/create-custimer.dto';
import { UpdateCustimerDto } from './dto/update-custimer.dto';

@Injectable()
export class CustimersService {
  create(createCustimerDto: CreateCustimerDto) {
    return 'This action adds a new custimer';
  }

  findAll() {
    return `This action returns all custimers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} custimer`;
  }

  update(id: number, updateCustimerDto: UpdateCustimerDto) {
    return `This action updates a #${id} custimer`;
  }

  remove(id: number) {
    return `This action removes a #${id} custimer`;
  }
}
