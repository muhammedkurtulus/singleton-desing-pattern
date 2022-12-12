import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingletonService } from './singleton/singleton.service';
import { SingletonController } from './singleton/singleton.controller';

@Module({
  imports: [],
  controllers: [AppController, SingletonController],
  providers: [AppService, SingletonService],
})
export class AppModule {}
