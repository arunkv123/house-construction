import {
  Controller, Get,
  Inject,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class GatewayController {

  constructor(@Inject('USER_SERVICE') private userServiceClient: ClientProxy,
    @Inject('HOUSE_CONSTRUCTION') private houseConstructionClient: ClientProxy) { }

  @Get(':name')
  public async getRestMicroservice(@Param('name') name: string): Promise<any> {
    return this.userServiceClient
      .send('rest-micro-service', name);
  }

  @Get('queue/:name')
  public async getQueueService(@Param('name') name: string): Promise<any> {
    var response: string;
    await this.houseConstructionClient
      .send({ cmd: 'queue-micro-service' }, name).forEach((data: string) => {
        response = data;
      });
    return response;
  }
}
