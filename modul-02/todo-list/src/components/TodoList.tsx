'use client'
import { useEditInline } from "@/hooks/useEditInline"
import { useDeadline } from "@/hooks/useDeadline"

interface TodoListProps {
    isDark: boolean,
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[],
    onToggle: (id: number) => void,
    onDelete: (id: number) => void,
    onUpdate: (id: number, text: string) => void
    onUpdateDate: (id: number, date: string) => void
}
export default function TodoList({ isDark, todos, onToggle, onDelete, onUpdate, onUpdateDate }: TodoListProps) {

    const { editingId, tempText, setTempText, startEditing, cancelEditing } = useEditInline()
    const todosWithStatus = useDeadline(todos)

    function handleBlurOrEnter(id: number) {
        if (tempText.trim()) {
            onUpdate(id, tempText)
        }
        cancelEditing()
    }

    return (
        <div className={`${isDark ? "bg-slate-800" : "bg-white"} mt-4 rounded-md shadow-md overflow-hidden`}>
            {
                todos.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No todos found</p>
                ) : (
                    <ul className={`mt-5 rounded-lg shadow-md ${isDark ? "bg-slate-800" : "bg-white"}`}>
                        {
                            todosWithStatus?.map((todo, key) => (
                                <li
                                    key={key}
                                    className={`flex items-center justify-between border-b px-4 py-3 cursor pointer 
                                ${isDark ? "border-slate-700 text-slate-100" : "border-slate-200 text-slate-800"}`}>
                                    <div className="flex items-center gap-3 w-full">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => onToggle(todo.id)}
                                            className="cursor-pointer"
                                        />
                                        {
                                            editingId === todo.id ? (
                                                <input
                                                    type="text"
                                                    onChange={(e) => setTempText(e.target.value)}
                                                    onBlur={() => handleBlurOrEnter(todo.id)}
                                                    onKeyDown={(e) => e.key === "Enter" && handleBlurOrEnter(todo.id)}
                                                    className={`w-full bg-transparent outline-none border-b ${isDark ? "border-slate-600 text-slate-100" : "border-slate-300 text-slate-800"}`}
                                                    autoFocus
                                                />
                                            ) : (
                                                <div
                                                    onClick={() => startEditing(todo.id, todo.text)}
                                                    className={`${todo.completed ? "line-through opacity-60" : ""}`}>
                                                    {todo.text}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-auto gap-2">
                                        <input
                                            type="date"
                                            value={todo.deadline}
                                            onChange={(e) => onUpdateDate(todo.id, e.target.value)}
                                            className={`text-sm px-2 py-1 rounded ${isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                                        />
                                        {
                                            todo.deadline && todo.isOverdue && (
                                                <span className="text-xs text-red-500 font-semibold">
                                                    Overdue
                                                </span>
                                            )
                                        }
                                    </div>
                                    <button
                                        onClick={() => onDelete(todo.id)}
                                        className="text-red-400 hover:text-red-600"
                                    >
                                        X
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}
