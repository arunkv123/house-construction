import { Controller, Get } from '@nestjs/common';
import { UserService } from './services/user.service';

import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern('rest-micro-service')
  public async getRestMicroService(name: string) {
    return name +' is testing Rest Microservice!!!';
  }

}
