import { Module } from '@nestjs/common';
import { userControler } from './user.controler';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [userControler],
  providers: [UserService],
  exports: [],
})
export class userModules {}
