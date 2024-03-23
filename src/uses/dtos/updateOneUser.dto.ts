import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './createUsers.dto';

export class UpdateOneUserDTO extends PartialType(CreateUserDTO) {}
