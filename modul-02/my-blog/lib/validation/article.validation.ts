import { z } from 'zod'

export const articleSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().min(20, "Content must be at least 20 characters"),
    image: z.any().refine((file) => file.length > 0, "Image file is required"),
    author: z.string().min(2, "Author must be at least 2 characters")
})

export type ArticleForm = z.infer<typeof articleSchema>