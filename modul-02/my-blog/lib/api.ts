import axios from "axios";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID!
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY!

const BASE_URL = `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/`

interface User {
    username: string,
    email: string,
    password: string
}

export async function registerUser(data: User) {
    const res = await axios.post(BASE_URL + `users/register`, data)
    return res.data
}

export async function getArticles() {
    const res = await axios.get(BASE_URL + 'data/Articles', {
        params: {
            sortBy: 'created DESC' // newest first
        }
    })
    return res.data
}

export async function getArticleById(id: string) {
    const res = await axios.get(BASE_URL + `data/Articles/${id}`)
}