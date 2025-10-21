'use client'
import { useState, useEffect } from "react"
import { saveData, loadData, removeData } from "@/lib/storage"

export interface ITodos {
    id: number
    text: string
    completed: boolean
}

export function useTodoActions(initialTodos: ITodos[]) {
    const [todos, setTodos] = useState<ITodos[]>(() => loadData("todos", initialTodos))

    useEffect(() => {
        saveData("todos", todos)
    }, [todos])


    function createTodo(text: string) {
        if (!text.trim()) return
        const newTodo: ITodos = {
            id: Date.now(),
            text,
            completed: false,
        }
        setTodos([newTodo, ...todos])
    }

    function toggleTodo(id: number) {
        setTodos(todos.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ))
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter((item) => item.id !== id))
    }

    function clearCompleted() {
        setTodos(todos.filter((item) => !item.completed))
    }

    function updateTodoText(id: number, newText: string) {
        setTodos(todos.map((item) =>
            item.id === id ? { ...item, text: newText } : item
        ))
    }

    function updateTodoDate(id: number, newDate: string) {
        setTodos(todos.map((item) => item.id === id ? { ...item, deadline: newDate } : item))
    }

    return { todos, setTodos, createTodo, toggleTodo, deleteTodo, clearCompleted, updateTodoText, updateTodoDate }
}
