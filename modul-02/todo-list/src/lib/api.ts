import axios from "axios";

const APP_ID = process.env.NEXT_PUBLIC_APP_ID as string
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY as string

axios.defaults.baseURL = `https://api.backendless.com/${APP_ID}/${REST_API_KEY}`
