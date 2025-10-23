import axios from "axios"

export const APP_ID = process.env.NEXT_PUBLIC_APP_ID
export const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY

export function backendlessAuth(endpoint: 'register' | 'login' | 'users') {
    const baseUrl = `https://api.backendless.com/${APP_ID}/${REST_API_KEY}`

    if (endpoint === "register" || endpoint === "login") {

        // untuk menentukan endpoint auth apa yang akan digunakan
        return axios.create({
            baseURL: `${baseUrl}/users/${endpoint === "register" ? "register" : "login"}`
        })
    }

    // default ke data/Users untuk selain register dan login
    return axios.create({
        baseURL: `${baseUrl}/data/Users`
    })
}