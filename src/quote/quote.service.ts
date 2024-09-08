import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuoteService {
    constructor(private readonly prisma: PrismaService){}

    async create(createQuoteDto: CreateQuoteDto){
        return this.prisma.quote.create({
            data:{
                ...createQuoteDto,
            }
        })
    }

    async findUserQuotes(userId:number){
        return this.prisma.quote.findMany({
            where:{userId},
        });
    }

    async searchByAuthor(author:string){
        return this.prisma.quote.findMany({
            where:{author}
        })
    }
}
