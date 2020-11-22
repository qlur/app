import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
