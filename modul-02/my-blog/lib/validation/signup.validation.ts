import { z } from 'zod'

export const signUpSchema = z.object({
    username: z.string().min(3, 'Minimum 3 characters'),
    email: z.email("Invalid email format"),
    password: z.string().min(8, 'Minimum 8 characters'),
})

export type SignUupFormType = z.infer<typeof signUpSchema>