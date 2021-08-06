import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern({ cmd: 'queue-micro-service' })
  public getQueueService(@Payload() name: string, @Ctx() context: RmqContext) {
    return name + ' is Queue Micro service!!!';
  }
}
