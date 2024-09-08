import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}
  @Post()
  async create(@Body() createQuoteDto:CreateQuoteDto){
    console.log('quote post',createQuoteDto)
    return this.quoteService.create(createQuoteDto);
  }

  @Get('history')
  async getHistory(@Query('userId') userId:number){
    console.log('HISSSSSSSSStor',userId)
    return this.quoteService.findUserQuotes(+userId);
  }  

  @Get('search')
  async searchByAuthor(@Query('author') author:string){
    return this.quoteService.searchByAuthor(author)
  }

}
