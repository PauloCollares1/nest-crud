import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks() {
    process.on('beforeExit', async () => {
      console.log('Closing Prisma connection...');
      await this.$disconnect();
      console.log('Prisma connection closed.');
    });
  }
}
