import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModules } from './uses/user.module';

@Module({
  imports: [userModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
