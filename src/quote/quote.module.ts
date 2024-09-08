import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[UserModule,PrismaModule],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}
