'use client'
import { useState, useMemo, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import TodoHeader from "@/components/TodoHeader"
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"

import todoItems from '@/dummy/todos.json'

interface ITodos {
  id: number,
  text: string,
  completed: boolean
}

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // baca dari URL params (jika ada)
  const initialFilter = (searchParams.get("filter") as "all" | "active" | "completed") || "all"
  const initialSearch = searchParams.get("search") || ""

  const [isDark, setIsDark] = useState<boolean>(true)
  const [todos, setTodos] = useState<ITodos[]>(todoItems)
  const [filter, setFilter] = useState<"all" | "active" | "completed">(initialFilter)
  const [search, setSearch] = useState<string>(initialSearch)

  // update URL saat filter atau search berubah
  useEffect(() => {
    const params = new URLSearchParams()
    if (filter !== "all") {
      params.set("filter", filter)
    }
    if (search.trim() !== "") {
      params.set("search", search)
    }
    const queryString = params.toString()
    router.replace(queryString ? `?${queryString}` : "", { scroll: false })
  }, [filter, search, router])


  function toggleTheme() {
    setIsDark(!isDark)
  }

  function createTodo(text: string) {
    if (!text.trim()) return
    const newTodo: ITodos = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  function toggleTodo(id: number) {
    setTodos(todos.map((item) => item.id === id ? {
      ...item, completed: !item.completed
    } : item))
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((item) => item.id !== id))
  }

  function clearCompleted() {
    setTodos(todos.filter((item) => !item.completed))
  }

  function filteredTodos() {
    return useMemo(() => {
      let result = todos

      // jika filter yang aktif adalah 'active' maka result dicarikan yang tasknya aktif
      if (filter === "active") {
        result = result.filter((item) => !item.completed)
      }

      // jika filter yang aktif adalah 'complete' maka result dicarikan yang tasknya dichecklist
      if (filter === "completed") {
        result = result.filter((item) => item.completed)
      }

      // jika filter yang aktif adalah search
      if (search.trim() !== "") {
        result = result.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()))
      }

      return result
    }, [todos, filter, search])
  }

  return (
    <main className="w-full h-1/2">
      <div className={`w-full flex flex-col items-center min-h-screen px-4 transition-all duration-500
        ${isDark ? "bg-[url('/darkMode.svg')] bg-no-repeat bg-black" : "bg-[url('/lightMode.svg')] bg-no-repeat"}`}>
        <div className="w-full max-w-lg mt-20">
          <TodoHeader isDark={isDark} toggleTheme={toggleTheme} />
          <TodoInput
            isDark={isDark}
            onAdd={createTodo}
            onSearch={(text) => setSearch(text)}
          />
          <TodoList
            isDark={isDark}
            todos={filteredTodos()}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <TodoFooter
            isDark={isDark}
            totalActive={todos.filter((item) => !item.completed).length}
            onFilterChange={(val) => setFilter(val)}
            onClearCompleted={clearCompleted}
            currentFilter={filter}
          />
        </div>
        <p className={`text-sm mt-10 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  )
}
