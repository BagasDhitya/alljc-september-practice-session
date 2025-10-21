'use client'
import { useMemo } from "react"
import type { ITodos } from "./useTodoActions"

export function useFilteredTodos(todos: ITodos[], filter: "all" | "active" | "completed", search: string) {
    const filtered = useMemo(() => {
        let result = todos

        if (filter === "active") result = result.filter((item) => !item.completed)
        if (filter === "completed") result = result.filter((item) => item.completed)

        if (search.trim() !== "") {
            result = result.filter((item) =>
                item.text.toLowerCase().includes(search.toLowerCase())
            )
        }

        return result
    }, [todos, filter, search])

    return filtered
}
