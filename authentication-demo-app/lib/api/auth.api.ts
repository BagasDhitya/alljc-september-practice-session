import { backendless } from "./backendless";

interface RegisterPayload {
    email: string,
    password: string,
    name: string
}

interface LoginPayload {
    login: string,
    password: string
}

export async function register(data: RegisterPayload) {
    const res = await backendless.post('/users/register', data)
    return res.data
}

export async function login(data: LoginPayload) {
    const res = await backendless.post('/users/login', data)
    return res.data
}