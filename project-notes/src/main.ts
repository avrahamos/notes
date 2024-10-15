import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookiParser from 'cookie-parser';

const port = process.env.PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookiParser());
  await app.listen(port);
  console.log(`app is runing : http://localhost:${port}`);
}
bootstrap();
