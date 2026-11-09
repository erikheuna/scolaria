import { Injectable } from '@nestjs/common';
import { roleSchema } from '@scolaria/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRoles() {
    return roleSchema.options;
  }
}
