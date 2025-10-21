'use client'
import { useMemo } from "react"
import type { ITodos } from "./useTodoActions"

interface ITodoWithDate extends ITodos {
    deadline?: string
}

export function useDeadline(todos: ITodoWithDate[]) {
    const now = new Date()

    const todosWithStatus = useMemo(() => {
        return todos.map((todo) => {
            if (!todo.deadline) return { ...todo, isOverdue: false }
            const due = new Date(todo.deadline)
            const isOverdue = !todo.completed && due < now
            return { ...todo, isOverdue }
        })
    }, [todos])

    return todosWithStatus
}