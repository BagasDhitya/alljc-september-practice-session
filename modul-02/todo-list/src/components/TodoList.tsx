'use client'
import TodoItem from "./TodoItem"

interface TodoListProps {
    isDark: boolean,
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[],
    onToggle: (id: number) => void,
    onDelete: (id: number) => void
}
export default function TodoList({ isDark, todos, onToggle, onDelete }: TodoListProps) {
    return (
        <div className={`${isDark ? "bg-slate-800" : "bg-white"} mt-4 rounded-md shadow-md overflow-hidden`}>
            {
                todos.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No todos found</p>
                ) : (
                    todos.map((todo, key) => (
                        <TodoItem
                            key={key}
                            isDark={isDark}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))
                )
            }
        </div>
    )
}
