import { Controller, Get } from '@nestjs/common';
import { UserService } from './services/user.service';

import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern('test-message-pattern')
  public async testMessagePattern() {
    console.log('user app');
    return 'user message pattern test success';
  }

  @Get()
  public hello(){
    return 'hello world';
  }
}
