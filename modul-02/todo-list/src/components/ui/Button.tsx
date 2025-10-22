'use client'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading: boolean;
}

export default function Button({ label, loading, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            disabled={loading}
            className={`bg-[var(--violet-main)] text-white py-2 px-4 rounded-md hover:bg-[var(--violet-hover)] disabled:bg-gray-400 transition-colors`}
        >
            {loading ? "Loading ..." : label}
        </button>
    )
}
