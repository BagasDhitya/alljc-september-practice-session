'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export function usePostAxios() {
    const [post, setPost] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const [time, setTime] = useState<number>(0)

    async function fetchPosts() {
        const start = performance.now()
        try {
            const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            setPost(res.data)
        } catch (error: any) {
            setError('Failed to fetch post using axios : ' + error)
        } finally {
            const end = performance.now()
            setTime(end - start)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return { post, loading, error, time }
}