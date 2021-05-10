import { PartialType } from '@nestjs/mapped-types';
import { CreateCustimerDto } from './create-custimer.dto';

export class UpdateCustimerDto extends PartialType(CreateCustimerDto) {}
