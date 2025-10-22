'use client'
import { InputHTMLAttributes } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: FieldError,
    register: UseFormRegisterReturn
}

export default function InputField({ label, error, register, ...props }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                {...register}
                {...props}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--violet-main)]"
            />
            {
                error && <p className="text-red-500 text-xs">{error.message}</p>
            }
        </div>
    )
}
