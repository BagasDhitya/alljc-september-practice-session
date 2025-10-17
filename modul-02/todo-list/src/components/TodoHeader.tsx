'use client'
interface TodoHeaderProps {
    isDark: boolean,
    toggleTheme: () => void
}

export default function TodoHeader({ isDark, toggleTheme }: TodoHeaderProps) {
    return (
        <header className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold tracking-[0.5rem] text-white uppercase">TODO</h1>
            <button
                onClick={toggleTheme}
                className="text-white text-3xl transition-transform duration-300 hover:scale-110"
            >
                {isDark ? '🌙' : '☀️'}
            </button>
        </header>
    )
}
