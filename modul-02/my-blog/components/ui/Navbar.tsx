'use client'

import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
                <h1 className="text-xl font-bold text-blue-600">My Blog</h1>
                <Link href={'/home'} className="hover:text-blue-500">Home</Link>
                <Link href={'/auth/sign-up'} className="hover:text-blue-500">Sign Up</Link>
                <Link href={'/auth/sign-in'} className="hover:text-blue-500">Sign In</Link>
                <Link href={'/create-article'} className="hover:text-blue-500">Create Article</Link>
                <Link href={'/profile'} className="hover:text-blue-500">Profile</Link>
            </div>
        </nav>
    )
}
