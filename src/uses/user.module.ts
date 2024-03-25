import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { userControler } from './user.controler';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { UserParamIdMiddleware } from 'src/middlewares/usersMiddlewares/userParamIdMiddleware';

@Module({
  imports: [PrismaModule],
  controllers: [userControler],
  providers: [UserService],
  exports: [],
})
export class userModules implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserParamIdMiddleware).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL,
    });
  }
}
