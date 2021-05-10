import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustimersService } from './custimers.service';
import { CreateCustimerDto } from './dto/create-custimer.dto';
import { UpdateCustimerDto } from './dto/update-custimer.dto';

@Controller('custimers')
export class CustimersController {
  constructor(private readonly custimersService: CustimersService) {}

  @Post()
  create(@Body() createCustimerDto: CreateCustimerDto) {
    return this.custimersService.create(createCustimerDto);
  }

  @Get()
  findAll() {
    return this.custimersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.custimersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustimerDto: UpdateCustimerDto) {
    return this.custimersService.update(+id, updateCustimerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.custimersService.remove(+id);
  }
}
