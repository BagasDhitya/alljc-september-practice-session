import { articleRepository } from "../repositories/article.repository";
import { CreateArticleDTO, UpdateArticleDTO } from "../dto/article.dto";

export const articleService = {
  async create(data: CreateArticleDTO) {
    return await articleRepository.create(data);
  },

  async update(id: number, data: UpdateArticleDTO) {
    const article = await articleRepository.getById(id);
    if (!article) throw new Error("Article not found");

    return await articleRepository.update(id, data);
  },

  async getAll() {
    return await articleRepository.getAll();
  },

  async getById(id: number) {
    const article = await articleRepository.getById(id);
    if (!article) throw new Error("Article not found");

    return article;
  },

  async delete(id: number) {
    const article = await articleRepository.getById(id);
    if (!article) throw new Error("Article not found");

    return await articleRepository.delete(id);
  },
};
