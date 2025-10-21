'use client'
import React, { useState } from 'react'

interface TodoInputProps {
    isDark?: boolean
    onAdd: (text: string, deadline: string) => void
    onSearch: (text: string) => void
}

export default function TodoInput({ isDark, onAdd, onSearch }: TodoInputProps) {
    const [input, setInput] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        onAdd(input, deadline)
        setInput("")
        setDeadline("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-2 mt-6'
        >
            <input
                type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                    onSearch(e.target.value)
                }}
                placeholder='Create a new task ...'
                className={`flex-1 px-4 py-3 rounded-md outline-none 
                    ${isDark ? "bg-slate-800 text-white placeholder-slate-500" : "bg-white text-slate-700 placeholder-slatte-400"
                    }`}
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className={`px-3 py-3 rounded-md cursor-pointer ${isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}
            />
            <button
                type='submit'
                className={`px-5 py-3 font-semibold rounded-md ${isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white`}
            >
                Add
            </button>
        </form>
    )
}
