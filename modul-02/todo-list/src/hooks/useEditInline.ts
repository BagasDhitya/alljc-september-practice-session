'use client'
import { useState } from "react"

export function useEditInline() {
    const [editingId, setEditingId] = useState<number | null>(null)
    const [tempText, setTempText] = useState<string>("")

    function startEditing(id: number, currentText: string) {
        setEditingId(id)
        setTempText(currentText)
    }

    function cancelEditing() {
        setEditingId(null)
        setTempText("")
    }

    return {
        editingId,
        tempText,
        setTempText,
        startEditing,
        cancelEditing
    }
}