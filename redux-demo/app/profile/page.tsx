'use client'
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/stores/theme-slice"
import Link from "next/link"

export default function Profile() {
    const theme = useSelector((state: any) => state.theme.mode)

    return (
        <div className={`w-screen h-screen flex justify-center items-center ${theme ===
            'light' ? 'bg-white text-slate-700' : 'bg-slate-700 text-white'
            }`}>
            Welcome to your profile
            <Link
                href={'/home'}
                className={`p-5 rounded-md ${theme ===
                    'light' ? 'bg-white text-slate-700' : 'bg-slate-700 text-white'
                    }`}
            >Go to Home</Link>
        </div>
    )
}
