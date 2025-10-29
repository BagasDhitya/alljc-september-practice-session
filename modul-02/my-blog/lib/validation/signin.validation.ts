import { z } from 'zod'

export const signInSchema = z.object({
    login: z.string().min(3, "Username or email must be filled"),
    password: z.string().min(6, "Password min. 6 characters")
})

export type SignInFormType = z.infer<typeof signInSchema>