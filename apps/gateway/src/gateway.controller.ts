import {
  Controller, Get,
  Inject,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class GatewayController {
  constructor(@Inject('USER_SERVICE') private userServiceClient: ClientProxy) { }

  @Get(':name')
  public async getHello(@Param('name') name: string): Promise<any> {
    return this.userServiceClient
      .send('test-message-pattern', name);
  }
}
