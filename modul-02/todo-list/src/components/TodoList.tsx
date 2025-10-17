'use client'
import TodoItem from "./TodoItem"

interface TodoListProps {
    isDark: boolean,
}
export default function TodoList({ isDark }: TodoListProps) {

    const todos = [
        {
            id: 1,
            text: 'Complete online JavaScript course',
            completed: true
        },
        {
            id: 2,
            text: 'Jog around the park 3x',
            completed: false
        },
        {
            id: 3,
            text: '10 minutes meditation',
            completed: false
        },
        {
            id: 4,
            text: 'Read for 1 hour',
            completed: false
        },
        {
            id: 5,
            text: 'Pick up groceries',
            completed: false
        },
        {
            id: 6,
            text: 'Complete Todo App on Frontend Mentor',
            completed: false
        }
    ]

    return (
        <div className={`${isDark ? "bg-slate-800" : "bg-white"} mt-4 rounded-md shadow-md overflow-hidden`}>
            {todos.map((todo) => (
                <TodoItem
                    isDark={isDark}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}
