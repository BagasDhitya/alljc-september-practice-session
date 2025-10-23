'use client'
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Navbar() {
    const router = useRouter()
    const { user, logout, setUserFromStorage } = useAuthStore()

    useEffect(() => {
        setUserFromStorage()
    }, [setUserFromStorage])

    async function handleLogout() {
        await logout()
        router.push('/auth/login')
    }


    return (
        <nav className="w-full flex items-center justify-between bg-violet-600 text-white px-6 py-3 w-screen fixed top-0">
            <h1 className="font-semibold text-lg">Todo App</h1>
            {
                user ? (
                    <div className="flex items-center gap-4">
                        <span>Hello, {user.name}</span>
                        <button onClick={handleLogout} className="bg-white text-violet-600 px-3 py-1 rounded-md font-medium">
                            Logout
                        </button>
                    </div>
                ) : (
                    <span className="text-sm">Not logged in</span>
                )
            }
        </nav>
    )
}
