import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class userControler {
  @Post()
  async create(@Body() body) {
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
  async readOne(@Param() params) {
    return {
      method: 'PATCH',
      params,
    };
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return {
      method: 'PUT',
      body,
      params,
    };
  }

  @Patch(':id')
  async updatPatial(@Body() body, @Param() params) {
    return {
      method: 'PATCH',
      body,
      params,
    };
  }

  @Delete(':id')
  async delete(@Body() body, @Param() params) {
    return {
      method: 'DELETE',
      params,
    };
  }
}
