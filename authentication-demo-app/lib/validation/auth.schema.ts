import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(2, 'Nama minimal 2 karakter'),
    email: z.email('Email tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter')
})

export const loginSchema = z.object({
    login: z.email('Email tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter')
})

export type RegisterFormData = z.infer<typeof registerSchema>
export type LoginFormData = z.infer<typeof loginSchema>