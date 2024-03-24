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
import { UserService } from './user.service';

@Controller('users')
export class userControler {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const createUser = await this.userService.createUser(body);

    return {
      method: 'POST',
      message: 'Usuário criado com sucesso!',
      data: createUser,
    };
  }

  @Get()
  async read() {
    const listUsers = await this.userService.listUsers();

    return {
      method: 'GET',
      message: 'Usuários listados com sucesso!',
      users: listUsers,
    };
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) paramId) {
    const findOne = await this.userService.pickUser(paramId);

    return {
      method: 'GET',
      message: 'Usuários encontrado com sucesso!',
      user: findOne,
    };
  }

  @Put(':id')
  async update(
    @Body() body: UpdateUserDTO,
    @Param('id', ParseIntPipe) paramId,
  ) {
    const updatedUser = await this.userService.updateUser(body, paramId);

    return {
      method: 'PUT',
      message: 'Usuários editado com sucesso!',
      user: updatedUser,
    };
  }

  @Patch(':id')
  async updatPatial(
    @Body() body: UpdateOneUserDTO,
    @Param('id', ParseIntPipe) paramId,
  ) {
    const userField = await this.userService.updateFieldUser(body, paramId);

    return {
      method: 'PATCH',
      message: 'Usuários editado com sucesso!',
      user: userField,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) paramId) {
    const deletedUser = await this.userService.deleteUser(paramId);

    return {
      method: 'DELETE',
      message: 'Usuários deletado com sucesso!',
      user: deletedUser,
    };
  }
}
