import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateQuoteDto{
    @IsString()
    @ApiProperty({
        description: 'The text of the quote',
        example: 'any quote text.....',
      })
    text:string;

    @IsString()
    @ApiProperty({
        description: 'The author of the quote',
        example: 'Franklin D. Roosevelt',
      })
    author:string;


    @IsInt()
    @ApiProperty({
        description: 'The ID of the user who created the quote',
        example: 1,
      })
    userId:number;
}