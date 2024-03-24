import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUsers.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateOneUserDTO } from './dtos/updateOneUser.dto';
import { UpdateUserDTO } from './dtos/updateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async listUsers() {
    return this.prisma.pessoas.findMany();
  }

  async pickUser(id: number) {
    await this.findUser(id);

    return this.prisma.pessoas.findUnique({ where: { id } });
  }

  async createUser(body: CreateUserDTO) {
    return this.prisma.pessoas.create({
      data: body,
    });
  }

  async updateUser(body: UpdateUserDTO, id: number) {
    await this.findUser(id);

    return this.prisma.pessoas.update({ where: { id }, data: body });
  }

  async updateFieldUser(body: UpdateOneUserDTO, id: number) {
    return this.prisma.pessoas.update({ where: { id }, data: body });
  }

  async deleteUser(id: number) {
    await this.findUser(id);

    return this.prisma.pessoas.delete({ where: { id } });
  }

  async findUser(id: number) {
    const findUser = await this.prisma.pessoas.findUnique({ where: { id } });

    if (!findUser)
      throw new NotFoundException(
        'Operação cancelada, usuário não encontrado!',
      );
  }
}
