import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstructionStageService {
  getHello(): string {
    return 'Hello World!';
  }
}
