import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';
import mongooseModule from '@nestjs/mongoose';
@Module({
  imports: [AuthModule, UserModule, NotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
