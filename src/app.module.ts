import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Task } from './tasks/entities/task.entity';
import { UsersModule } from './users/users.module';
import * as process from "process";
import {Comment} from "./comments/entities/comment.entity";
import { AuthModule } from './auth/auth.module';
import {User} from "./users/entities/user.entity";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.HOST,
          port: parseInt(process.env.PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [Task, Comment, User],
          synchronize: true,
      }),
      TasksModule,
      CommentsModule,
      UsersModule,
      AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
