import { Injectable , Post,Req,Res,Get} from '@nestjs/common';



@Injectable()

export class AppService {
 
  getHello(): string {
    return 'Hello World!';
  }



}
