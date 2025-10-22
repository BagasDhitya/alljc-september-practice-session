import axios from "axios"

export const APP_ID = process.env.NEXT_PUBLIC_APP_ID
export const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY

export const backendlessAuth = axios.create({
    baseURL: `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/data/Users`,
})

