import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/sign_up')
  async createUser(@Body() userData: User) {
    try {
      console.log(userData);

      return 'ok';
    } catch (e) {
      return e;
    }
  }
}
