import { Controller, Get, Post,Res,Req } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';

let user ={
  id:1,
  email: "babli@123gmail.com",
  password:"babli123"
}
const JWT_SECRET = 'mastro'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,  private  jwtService: JwtService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('forget')
  async forgetLogin (@Req() req,@Res() res){
      const {email} = res.body;
      if(email !== user.email){
          res.send('userd not registerd')
          return;
      }

      const secret = JWT_SECRET+user.password
      const payload ={
          email:user.email,
          id:user.id
      }
      // const token = await this.JwtService.Sign(playload,secret,{expiresIn: '15m'})
      const token = await this.jwtService.sign(payload,{secret: '12324213'})
      const link = `http://localhost:3000/reset-password/${user.id}/${token}`
      console.log(link)
      res.send('password resent link')
  }

  @Get('/reset-password/:id/:token')
  async resetlogin (@Req() req,@Res() res){
const{id,token} = req.params;
if(id !== user.id){
  res.send('invalid');
  return;
}


  }
  

}
