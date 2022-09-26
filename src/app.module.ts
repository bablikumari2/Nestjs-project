import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SamlModule } from './saml/saml.module';

@Module({
  imports: [SamlModule,JwtModule],
  controllers: [AppController],
  providers: [AppService,JwtService],
})
export class AppModule {}
