'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/stores/authStore"

export function useProtectedPage() {
    const router = useRouter()
    const { user } = useAuthStore()

    useEffect(() => {
        console.log('user : ', user)
        if (user === null) {
            router.push('/auth/login')
        }
    }, [])

}