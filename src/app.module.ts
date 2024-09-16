import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quote.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ QuoteModule, UserModule, PrismaModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
