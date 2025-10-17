'use client'
import { useState } from "react"
import TodoHeader from "@/components/TodoHeader"
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import TodoFooter from "@/components/TodoFooter"

export default function Page() {
  const [isDark, setIsDark] = useState<boolean>(true)

  function toggleTheme() {
    setIsDark(!isDark)
  }

  return (
    <main className="w-full h-1/2">
      <div className={`w-full flex flex-col items-center min-h-screen px-4 transition-all duration-500
        ${isDark ? "bg-[url('/darkMode.svg')] bg-no-repeat bg-black" : "bg-[url('/lightMode.svg')] bg-no-repeat"}`}>
        <div className="w-full max-w-lg mt-20">
          <TodoHeader isDark={isDark} toggleTheme={toggleTheme} />
          <TodoInput isDark={isDark} />
          <TodoList isDark={isDark} />
          <TodoFooter isDark={isDark} />
        </div>
        <p className={`text-sm mt-10 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  )
}
