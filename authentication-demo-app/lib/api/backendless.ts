import axios from 'axios'

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const REST_API = process.env.NEXT_PUBLIC_REST_API

export const backendless = axios.create({
    baseURL: `https://api.backendless.com/${APP_ID}/${REST_API}`
})