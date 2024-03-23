import { Module } from '@nestjs/common';
import { userControler } from './user.controler';

@Module({
  imports: [],
  controllers: [userControler],
  providers: [],
  exports: [],
})
export class userModules {}
