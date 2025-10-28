'use client'
import { useState } from "react"

interface SearchProps {
    onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchProps) {
    const [query, setQuery] = useState<string>("")

    return (
        <div className="mb-6 flex items-center justify-center">
            <input
                type="text"
                placeholder="Search articles ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded-1-md px-4 py-2 w-72 focus:outline-none"
            />
            <button
                onClick={() => onSearch(query)}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    )
}
