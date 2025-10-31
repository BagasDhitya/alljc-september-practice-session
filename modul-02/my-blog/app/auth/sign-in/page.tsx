'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInSchema, SignInFormType } from "@/lib/validation/signin.validation"
import { loginUser } from "@/lib/api"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Cookies from 'js-cookie'

import { signIn } from "next-auth/react"

export default function page() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormType>({ resolver: zodResolver(signInSchema) })

    async function handleGoogleSignIn() {
        try {
            setLoading(true)
            await signIn('google', {
                callbackUrl: '/'
            })
        } catch (error) {
            toast.error('Google sign in failed')
        } finally {
            setLoading(false)
        }
    }

    async function onSubmit(data: SignInFormType) {
        try {
            setLoading(true)
            const res = await loginUser(data)

            // simpan userToken
            Cookies.set('user-token', res['user-token'], { expires: 7 })
            toast.success(`Welcome back, ${res.username}`)
            setTimeout(() => router.push('/home'), 2000)
        } catch (error: any) {
            const message = error.response?.data?.message || "Invalid credentials. Please try again"
            toast.error(message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6 text-blue-600">Sign In to Your Account</h1>

                {/* Username / Email */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Email or Username</label>
                    <input
                        {...register('login')}
                        type="text"
                        placeholder="Enter email or username"
                        className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-blue-400"
                    />
                    {errors.login && (<p className="text-red-600 text-xs mt-1">{errors.login.message}</p>)}
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        placeholder="Enter password"
                        className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-blue-400"
                    />
                    {errors.password && (<p className="text-red-600 text-xs mt-1">{errors.password.message}</p>)}
                </div>

                <button type="submit" className={`w-full py-2 rounded-md text-white font-medium ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
                    {loading ? "Signing in ... " : "Sign In"}
                </button>

                <div className="my-4 text-center text-sm text-gray-500">or</div>

                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className={`w-full py-2 rounded-md text-white font-medium ${loading ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                >
                    {loading ? 'Connecting ...' : 'Sign in with Google'}
                </button>
            </form>


        </div>
    )
}
