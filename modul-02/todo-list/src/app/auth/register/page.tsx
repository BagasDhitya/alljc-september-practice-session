'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, registerSchema } from '@/lib/validation/auth.validation'
import InputField from '@/components/ui/InputField'
import Button from '@/components/ui/Button'
import AuthFormWrapper from '@/components/AuthFormWrapper'

import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'


export default function Register() {
    const router = useRouter()

    const { register: registerUser, loading } = useAuthStore()
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) })

    async function onSubmit(data: RegisterSchema) {
        await registerUser(data)
        router.push('/auth/login')
    }

    return (
        <AuthFormWrapper
            title='Create an Account'
            footerText='Already have an account?'
            footerLinkText='Sign in here'
            footerHref='/auth/login'
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-3'
            >
                <InputField
                    label='Full Name'
                    register={register('name')}
                    error={errors.name}
                    placeholder='Enter your full name'
                />
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
                    label='Register'
                    loading={loading}
                    type='submit'
                />
            </form>
        </AuthFormWrapper>
    )
}
