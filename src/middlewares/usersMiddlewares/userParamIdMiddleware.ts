import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

export class UserParamIdMiddleware implements NestMiddleware {
  use(req: Request, next: NextFunction) {
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      throw new BadRequestException(
        'MID:Operação cancelada, usuário não encontrado!',
      );
    }

    next();
  }
}
