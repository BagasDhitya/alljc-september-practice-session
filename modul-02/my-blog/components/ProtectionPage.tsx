'use client'
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

interface ProtectionProps {
    children?: React.ReactNode
    redirectToWhenLoggedIn?: string // halaman tujuan kalau sudah login
}

export default function ProtectionPage({
    children,
    redirectToWhenLoggedIn = "/home",
}: ProtectionProps) {
    const router = useRouter()
    const userToken = Cookies.get("user-token")

    useEffect(() => {
        if (!userToken) {
            router.push("/auth/sign-in")
        } else {
            router.push(redirectToWhenLoggedIn)
        }
    }, [userToken, redirectToWhenLoggedIn, router])

    return <>{children}</>
}
