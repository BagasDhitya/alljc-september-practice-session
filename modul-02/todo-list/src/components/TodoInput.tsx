'use client'
import React, { useState } from 'react'

interface TodoInputProps {
    isDark?: boolean
    onAdd: (text: string) => void
    onSearch: (text: string) => void
}

export default function TodoInput({ isDark, onAdd, onSearch }: TodoInputProps) {
    const [input, setInput] = useState<string>("")

    function handleAddTodo() {
        onAdd(input)
        setInput("")
    }

    function searchTodo(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.target.value
        setInput(text)
        onSearch(text)
    }

    return (
        <div className={`relative ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-md shadow-md mt-6 flex items-center px-4 py-3`}>
            <input
                type="text"
                value={input}
                onChange={searchTodo}
                placeholder='Create a new todo or search todo ...'
                className='w-full outline-none text-gray-700 text-sm placeholder-gray-400 ml-12'
            />
            <button
                onClick={handleAddTodo}
                className='absolute left-4 w-5 h-5 border border-gray-300 rounded-full'></button>
            <button
                onClick={() => onSearch(input)}
                className='absolute right-4 text-gray-500 hover:text-gray-700 text-sm'
            >
                🔍
            </button>
        </div>
    )
}
