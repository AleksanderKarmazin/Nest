import { PartialType } from '@nestjs/mapped-types';
import { CreateBuerDto } from './create-buer.dto';

export class UpdateBuerDto extends PartialType(CreateBuerDto) {
  id: number;
}
