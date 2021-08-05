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
    ])],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule { }
