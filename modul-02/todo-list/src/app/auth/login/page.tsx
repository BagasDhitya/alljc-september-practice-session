'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, loginSchema } from '@/lib/validation/auth.validation'
import InputField from '@/components/ui/InputField'
import Button from '@/components/ui/Button'
import AuthFormWrapper from '@/components/AuthFormWrapper'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { backendlessAuth } from '@/lib/api'

export default function Register() {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) })

    async function onSubmit(data: LoginSchema) {
        try {
            setLoading(true)
            const response = await backendlessAuth.post('/login', {
                email: data.email,
                password: data.password,
            })
            alert(`Welcome back, ${response.data.name}`)
            router.push('/')
        } catch (error: any) {
            alert(error.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthFormWrapper
            title='Sign In'
            footerText='Don`t have an account?'
            footerLinkText='Register here'
            footerHref='/auth/register'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-3'
            >
                <InputField
                    label='Email'
                    register={register('email')}
                    error={errors.email}
                    placeholder='Enter your email'
                />
                <InputField
                    label='Password'
                    register={register('password')}
                    error={errors.password}
                    placeholder='Enter your password'
                    type='password'
                />
                <Button
                    label='Login'
                    loading={loading}
                    type='submit'
                />
            </form>
        </AuthFormWrapper>
    )
}
