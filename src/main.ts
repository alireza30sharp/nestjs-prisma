import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //باعث می شود فیلد های اضافی از سمت کاربر رو حذف کند 
    whitelist:true
  }))
  await app.listen(3000);
}
bootstrap();
