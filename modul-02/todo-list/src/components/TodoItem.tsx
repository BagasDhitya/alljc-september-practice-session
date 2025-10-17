'use client'

interface TodoItemProps {
    isDark?: boolean,
    todo: {
        id: number,
        text: string,
        completed: boolean,
    }
}

export default function TodoItem({ isDark, todo }: TodoItemProps) {

    function handleToggle() {
        // untuk latihan berikutnya
    }

    function handleDelete() {
        // untuk latihan berikutnya
    }

    return (
        <div className={`flex items-center justify-between px-5 py-4 border-b group ${isDark ? "border-slate-800 hover:bg-slate-50" : "bg-white"}`}>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleToggle}
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${todo.completed ? "bg-gradient-to-br from-indigo-400 to-purple-500 text-white"
                        : "border-gray-300"
                        }`}
                >
                    {todo.completed ? "✓" : ""}
                </button>
                <p className={`text-sm ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
                    {todo.text}
                </p>
            </div>
            <button
                onClick={handleDelete}
                className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition"
            >
                x
            </button>
        </div >
    )
}
