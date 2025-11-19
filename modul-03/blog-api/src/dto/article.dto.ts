export interface CreateArticleDTO {
  title: string;
  content: string;
}

export interface UpdateArticleDTO {
  title?: string;
  content?: string;
}
