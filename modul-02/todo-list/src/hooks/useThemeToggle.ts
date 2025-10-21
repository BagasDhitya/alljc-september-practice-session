'use client'
import { useState } from "react"

export function useThemeToggle() {
    const [isDark, setIsDark] = useState<boolean>(true)
    function toggleTheme() {
        setIsDark(!isDark)
    }
    return { isDark, toggleTheme }
}
