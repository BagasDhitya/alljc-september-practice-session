'use client'
import TodoHeader from "@/components/TodoHeader"
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"

import todoItems from "@/dummy/todos.json"

import { useThemeToggle } from "@/hooks/useThemeToggle"
import { useTodoParams } from "@/hooks/useTodoParams"
import { useTodoActions } from "@/hooks/useTodoActions"
import { useFilteredTodos } from "@/hooks/useFilteredTodos"
import { useProtectedPage } from "@/hooks/useProtectedPage"

export default function Page() {

  // proteksi halaman ketika user belum login
  useProtectedPage()

  const { isDark, toggleTheme } = useThemeToggle()
  const { filter, setFilter, search, setSearch } = useTodoParams()
  const { todos, createTodo, toggleTodo, deleteTodo, clearCompleted, updateTodoText, updateTodoDate } = useTodoActions(todoItems)
  const filteredTodos = useFilteredTodos(todos, filter, search)

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
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodoText}
            onUpdateDate={updateTodoDate}
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
