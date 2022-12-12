import { Controller, Get } from '@nestjs/common';
import { SingletonService } from './singleton.service';

@Controller('singleton')
export class SingletonController {

    constructor(private readonly singletonService : SingletonService) {}

    @Get()
    clientCode(): string {
    return this.singletonService.clientCode();
  }

}
