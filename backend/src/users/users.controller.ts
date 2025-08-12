import { UserSession } from '@mguay/nestjs-better-auth';
import { Controller, Get, Session } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('session')
  async getSession(@Session() session: UserSession) {
    return session;
  }
}
