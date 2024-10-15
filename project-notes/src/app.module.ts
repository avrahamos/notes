import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    NotesModule,
    MongooseModule.forRoot(process.env.CONNCTION_STRING),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
