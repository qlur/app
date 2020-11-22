import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { ArticleDTO } from './article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
  ) {}

  async showAll() {
    return await this.articleRepository.find();
  }

  async create(data: ArticleDTO) {
    const article = await this.articleRepository.create(data);
    await this.articleRepository.save(article);
    return article;
  }

  async read(id: string) {
    return await this.articleRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<ArticleDTO>) {
    await this.articleRepository.update({ id }, data);
    return await this.articleRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.articleRepository.delete({ id });
    return { deleted: true };
  }
}
