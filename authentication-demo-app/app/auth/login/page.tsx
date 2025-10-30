'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormData } from "@/lib/validation/auth.schema"
import { login as loginApi } from "@/lib/api/auth.api"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function page() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

    async function onSubmit(data: LoginFormData) {
        setLoading(true)
        try {
            await loginApi(data)
            alert('Login berhasil!')
            router.push('/')
        } catch (error) {
            alert('Login gagal : user belum terdaftar')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('login')}
                    className="border p-2 rounded w-full mb-2"
                />
                {errors.login && (<p className="text-red-500 text-sm">{errors.login.message}</p>)}
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                    className="border p-2 rounded w-full mb-2"
                />
                {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}

                <button
                    type="submit"
                    className="text-blue-600 cursor-pointer hover:underline"
                >
                    {loading ? 'Loading ...' : 'Login'}
                </button>
            </form>
        </div>
    )
}
