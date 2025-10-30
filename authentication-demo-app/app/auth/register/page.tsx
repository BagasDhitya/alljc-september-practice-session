'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterFormData } from "@/lib/validation/auth.schema"
import { register as registerApi } from "@/lib/api/auth.api"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function page() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) })

    async function onSubmit(data: RegisterFormData) {
        setLoading(true)
        try {
            await registerApi(data)
            alert('Registrasi berhasil! Silakan login')
            router.push('login')
        } catch (error) {
            alert('Registrasi gagal : ' + error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name')}
                    className="border p-2 rounded w-full mb-2"
                />
                {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
                <input
                    type="text"
                    placeholder="Email"
                    {...register('email')}
                    className="border p-2 rounded w-full mb-2"
                />
                {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
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
                    {loading ? 'Loading ...' : 'Register'}
                </button>
            </form>
        </div>
    )
}
