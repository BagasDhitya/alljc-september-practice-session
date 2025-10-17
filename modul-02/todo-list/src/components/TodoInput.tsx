'use client'
import React from 'react'

interface TodoInputProps {
    isDark?: boolean
}

export default function TodoInput({ isDark }: TodoInputProps) {

    function handleAddTodo() {
        // untuk latihan berikutnya
    }

    function searchTodo() {
        // untuk latihan berikutnya
    }

    return (
        <div className={`relative ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-md shadow-md mt-6 flex items-center px-4 py-3`}>
            <input
                type="text"
                placeholder='Create a new todo ...'
                className='w-full outline-none text-gray-700 text-sm placeholder-gray-400 ml-12'
            />
            <button
                onClick={handleAddTodo}
                className='absolute left-4 w-5 h-5 border border-gray-300 rounded-full'></button>
            <button
                onClick={searchTodo}
                className='absolute right-4 text-gray-500 hover:text-gray-700 text-sm'
            >
                🔍
            </button>
        </div>
    )
}
