'use client'
interface TodoFooterProps {
    isDark: boolean,
    totalActive: number,
    onFilterChange: (val: 'all' | 'active' | 'completed') => void,
    currentFilter: 'all' | 'active' | 'completed',
    onClearCompleted: () => void
}

export default function TodoFooter({ isDark, totalActive, onFilterChange, currentFilter, onClearCompleted }: TodoFooterProps) {
    return (
        <div className={`${isDark ? "bg-slate-800" : "bg-white"} rounded-md mt-2 shadow-md flex flex-col sm:flex-row justify-between items-center px-6 py-3 text-sm text-gray-400`}>
            <p>{totalActive} items left</p>
            <div className="flex gap-4 my-2 sm:my-0">
                {['all', 'active', 'completed'].map((cat, key) => (
                    <button
                        key={key}
                        onClick={() => onFilterChange(cat as any)}
                        className={`capitalize ${currentFilter === cat ? "text-blue-500 font-semibold" : ""}`}
                    >{cat}</button>
                ))}
            </div>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}
