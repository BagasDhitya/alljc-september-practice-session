import axios from "axios";
import { uploadImage } from "@/helpers/fileUpload.helper";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID!
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY!

const BASE_URL = `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/`

interface User {
    username: string,
    email: string,
    password: string
}

interface Article {
    title: string,
    content: string,
    image: string,
    author: string,
}

export async function handleUploadImage(file: File) {
    return uploadImage(file, BASE_URL)
}

export async function registerUser(data: User) {
    const res = await axios.post(BASE_URL + `users/register`, data)
    return res.data
}

export async function loginUser(data: { login: string, password: string }) {
    const res = await axios.post(BASE_URL + `users/login`, data)
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
    return res.data
}

export async function createArticle(data: Article) {
    const res = await axios.post(BASE_URL + `data/Articles`, data)
    return res.data
}