import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const info ={
      name: 'API backend Bsale',
      documentation: 'https://bsale-backend-jhonntan.herokuapp.com/docs',
      created: 'Jhonntan',
    }
    return info;
  }
}
