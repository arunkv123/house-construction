import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'user_api_dev',
          port: 3002
        }
      }
    ]),
    ClientsModule.registerAsync([{
      name: 'HOUSE_CONSTRUCTION',
      useFactory: () => ({
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://full_access:s3crEt@192.168.18.19:5672/hello'],
          queue: 'nestjs-microservices',
          queueOptions: {
            durable: true
          },
        }

      })
    }])],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule { }
