import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDTO } from './article.dto';

@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) {}
  @Get()
  showAllArticles() {
    return this.ArticleService.showAll();
  }

  @Post()
  createArticle(@Body() data: ArticleDTO) {
    return this.ArticleService.create(data);
  }

  @Get(':id')
  showArticle(@Param('id') id: string) {
    return this.ArticleService.read(id);
  }

  @Put(':id')
  UpdateArticle(@Param('id') id: string, @Body() data: Partial<ArticleDTO>) {
    return this.ArticleService.update(id, data);
  }

  @Delete(':id')
  destroyArticle(@Param('id') id: string) {
    return this.ArticleService.destroy(id);
  }
}
