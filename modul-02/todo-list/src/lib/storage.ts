'use client'

export function saveData(key: string, value: any) {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error("Error saving data : ", error)
    }
}

export function loadData(key: string, fallback: any) {
    try {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : fallback
    } catch (error) {
        console.error("Error loading data : ", error)
        return fallback
    }
}

export function removeData(key: string, fallback: any) {
    try {
        localStorage.removeItem(key)
        return fallback
    } catch (error) {
        console.error("Error removing data : ", error)
        return fallback
    }
}