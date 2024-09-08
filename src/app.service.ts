import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BACKEND IS UP AND RUNNING .. !';
  }
}
