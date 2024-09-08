import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';
import { NestExpressApplication } from '@nestjs/platform-express';

const allowedOrigins = process.env.ALLOWED_ORIGINS

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin:(origin,callback)=>{
      if(!origin){
        return callback(null,true)
      }
      if(allowedOrigins.includes(origin)){
        return callback(null,true)
      }
      callback(new Error('Not allowed by CORS'))
    },
    credentials:true,
    methods:'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders:'Content-Type,Authorization',
  })

  // Set up session middleware
  console.log('sese',process.env.SESSION_SECRET)
  app.use(
    session({
      secret: process.env.SESSION_SECRET || ' ', 
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, // Set to true if using HTTPS
    }),
  );

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());


  const config = new DocumentBuilder()
    .setTitle('Quote of the Day API')
    .setDescription('The Quote of the Day API description')
    .setVersion('1.0')
    .addTag('quotes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
