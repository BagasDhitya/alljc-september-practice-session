'use client'
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function useTodoParams() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const initialFilter = (searchParams.get("filter") as "all" | "active" | "completed") || "all"
    const initialSearch = searchParams.get("search") || ""

    const [filter, setFilter] = useState<"all" | "active" | "completed">(initialFilter)
    const [search, setSearch] = useState<string>(initialSearch)

    useEffect(() => {
        const params = new URLSearchParams()
        if (filter !== "all") params.set("filter", filter)
        if (search.trim() !== "") params.set("search", search)
        const queryString = params.toString()
        router.replace(queryString ? `?${queryString}` : "", { scroll: false })
    }, [filter, search, router])

    return { filter, setFilter, search, setSearch }
}
