import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstructionEstimateService {
  getHello(): string {
    return 'Hello World!';
  }
}
