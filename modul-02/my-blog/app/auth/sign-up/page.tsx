'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, SignUupFormType } from '@/lib/validation/signup.validation'
import { registerUser } from '@/lib/api'
import toast, { Toaster } from 'react-hot-toast'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function page() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<SignUupFormType>({ resolver: zodResolver(signUpSchema) })

    async function onSubmit(data: SignUupFormType) {
        try {
            setLoading(true)
            await registerUser(data)
            toast.success("Registration succesful! Redirecting to sign in ...")
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to register')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-50'>
            <Toaster position='top-center' />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white shadow-md rounded-lg p-6 w-full max-w-md'
            >
                <h1 className='text-2xl font-semibold text-center mb-6 text-blue-600'>Create Account</h1>

                {/* Username */}
                <div className='mb-4'>
                    <label className='block mb-1 text-sm font-medium'>Username</label>
                    <input
                        {...register("username")}
                        type="text"
                        placeholder='Enter username ...'
                        className='border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-blue-400'
                    />
                    {errors.username && (<p className='text-red-500 text-xs mt-1'>{errors.username.message}</p>)}
                </div>

                {/* Email */}
                <div className='mb-4'>
                    <label className='block mb-1 text-sm font-medium'>Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder='Enter email ...'
                        className='border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-blue-400'
                    />
                    {errors.email && (<p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>)}
                </div>

                {/* Password */}
                <div className='mb-4'>
                    <label className='block mb-1 text-sm font-medium'>Password</label>
                    <input
                        {...register("password")}
                        type="password"
                        placeholder='Enter password ...'
                        className='border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-blue-400'
                    />
                    {errors.password && (<p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>)}
                </div>

                <button
                    type='submit'
                    disabled={loading}
                    className={`w-full py-2 rounded-md text-white font-medium ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {loading ? "Registering ... " : "Sign Up"}
                </button>

            </form>
        </div>
    )
}
