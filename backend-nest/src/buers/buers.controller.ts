import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BuersService } from './buers.service';
import { CreateBuerDto } from './dto/create-buer.dto';
import { UpdateBuerDto } from './dto/update-buer.dto';

@Controller()
export class BuersController {
  constructor(private readonly buersService: BuersService) {}

  @MessagePattern('createBuer')
  create(@Payload() createBuerDto: CreateBuerDto) {
    return this.buersService.create(createBuerDto);
  }

  @MessagePattern('findAllBuers')
  findAll() {
    return this.buersService.findAll();
  }

  @MessagePattern('findOneBuer')
  findOne(@Payload() id: number) {
    return this.buersService.findOne(id);
  }

  @MessagePattern('updateBuer')
  update(@Payload() updateBuerDto: UpdateBuerDto) {
    return this.buersService.update(updateBuerDto.id, updateBuerDto);
  }

  @MessagePattern('removeBuer')
  remove(@Payload() id: number) {
    return this.buersService.remove(id);
  }
}
