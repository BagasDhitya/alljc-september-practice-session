import { PrismaClient } from "@prisma/client";
import { CreateArticleDTO, UpdateArticleDTO } from "../dto/article.dto";

const prisma = new PrismaClient();

export const articleRepository = {
  create(data: CreateArticleDTO) {
    return prisma.article.create({ data });
  },

  update(id: number, data: UpdateArticleDTO) {
    return prisma.article.update({
      where: { id },
      data,
    });
  },

  getAll() {
    return prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  getById(id: number) {
    return prisma.article.findUnique({
      where: { id },
    });
  },

  delete(id: number) {
    return prisma.article.delete({
      where: { id },
    });
  },
};
