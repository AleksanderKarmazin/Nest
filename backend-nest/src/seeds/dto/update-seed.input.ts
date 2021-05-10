import { CreateSeedInput } from './create-seed.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSeedInput extends PartialType(CreateSeedInput) {
  id: number;
}
