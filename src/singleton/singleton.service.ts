import { Injectable } from '@nestjs/common';
import Singleton  from './singleton.func';

@Injectable()
export class SingletonService {

    clientCode(): string {
        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();

        if (s1 === s2) {
            return 'Singleton works, both variables contain the same instance.';
        } else {
            return 'Singleton failed, variables contain different instances.';
        }
        
      }  

}
