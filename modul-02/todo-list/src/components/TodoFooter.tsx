'use client'
interface TodoFooterProps {
    isDark: boolean
}

export default function TodoFooter({ isDark }: TodoFooterProps) {

    function handleFilter(type: string) {
        // untuk latihan besoknya
    }

    function handleClearCompleted() {
        // untuk latihan besoknya
    }

    return (
        <div className={`${isDark ? "bg-slate-800" : "bg-white"} rounded-md mt-2 shadow-md flex flex-col sm:flex-row justify-between items-center px-6 py-3 text-sm text-gray-400`}>
            <p>5 items left</p>
            <div className="flex gap-4 my-2 sm:my-0">
                <button onClick={() => handleFilter("all")} className="font-bold text-blue-500">
                    All
                </button>
                <button onClick={() => handleFilter("active")}>
                    Active
                </button>
                <button onClick={() => handleFilter("completed")}>
                    Completed
                </button>
            </div>
            <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
    )
}
