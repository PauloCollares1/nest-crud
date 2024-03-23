import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUsers.dto';
import { UpdateUserDTO } from './dtos/updateUser.dto';
import { UpdateOneUserDTO } from './dtos/updateOneUser.dto';

@Controller('users')
export class userControler {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return {
      method: 'POST',
      body,
    };
  }

  @Get()
  async read() {
    return {
      method: 'GET',
      users: [],
    };
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) paramId) {
    return {
      method: 'GET',
      params: { paramId },
    };
  }

  @Put(':id')
  async update(@Body() body: UpdateUserDTO, @Param() params) {
    return {
      method: 'PUT',
      body,
      params,
    };
  }

  @Patch(':id')
  async updatPatial(
    @Body() body: UpdateOneUserDTO,
    @Param('id', ParseIntPipe) paramId,
  ) {
    return {
      method: 'PATCH',
      body,
      params: { paramId },
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) paramId) {
    return {
      method: 'DELETE',
      params: { paramId },
    };
  }
}
