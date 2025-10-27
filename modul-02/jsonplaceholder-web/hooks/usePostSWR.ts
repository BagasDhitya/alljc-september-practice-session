'use client'
import useSWR from "swr";
import axios from "axios";
import { Post } from "./usePostAxios";

async function fetcher(url: string) {
    const start = performance.now()
    const res = await axios.get<Post[]>(url)
    const end = performance.now() as any

    (res.data as any).fetchTime = end - start
    return res.data
}

export function usePostSWR() {
    const { data, error, isLoading } = useSWR<Post[]>('https://jsonplaceholder.typicode.com/posts', fetcher)
    const time = (data as any)?.fetchTime

    return {
        posts: data,
        loading: isLoading,
        error: error,
        time: time
    }
}