import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { AppUpdate } from './app.update';
import * as dotenv from 'dotenv';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

const sessions = new LocalSession({ database: 'session_db.json' });

dotenv.config();

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: process.env.TG_TOKEN,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [AppUpdate, AppService, PrismaService],
})
export class AppModule {}
