import {
  Controller, Get,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class GatewayController {
  constructor(@Inject('USER_SERVICE') private userServiceClient: ClientProxy) { }

  @Get()
  public async getHello(): Promise<any> {
    console.log('gateway');
    return this.userServiceClient
      .send('test-message-pattern', '');
  }
}
