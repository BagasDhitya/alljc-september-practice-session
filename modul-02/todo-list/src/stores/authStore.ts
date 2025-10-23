'use client'
import { create } from 'zustand'
import { backendlessAuth } from '@/lib/api'

interface User {
    name: string
    email: string
    'user-token'?: string
}

interface AuthState {
    user: User | null
    loading: boolean
    error: string | null
    register: (data: { name: string, email: string, password: string }) => Promise<void>
    login: (data: { email: string, password: string }) => Promise<void>
    logout: () => void
    setUserFromStorage: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: false,
    error: null,

    // REGISTER
    register: async (data) => {
        try {
            set({ loading: true, error: null })
            const api = backendlessAuth('register')
            await api.post('', {
                email: data.email,
                name: data.name,
                password: data.password
            })
            alert('Registration successful')
        } catch (error: any) {
            set({ error: error.response?.data?.message || 'Something went wrong' })
            alert(error.response?.data?.message || 'Something went wrong')
        } finally {
            set({ loading: false })
        }
    },

    // LOGIN
    login: async (data) => {
        try {
            set({ loading: true, error: null })
            const api = backendlessAuth('login')
            const response = await api.post('', {
                login: data.email,
                password: data.password
            })
            const credentials = {
                name: response.data?.name,
                email: response.data?.email,
                token: response.data?.['user-token']
            }
            localStorage.setItem('user', JSON.stringify(credentials))
            alert('Login successful')
        } catch (error: any) {
            set({ error: error.response?.data?.message || 'Something went wrong' })
            alert(error.response?.data?.message || 'Something went wrong')
        } finally {
            set({ loading: false })
        }
    },

    // LOGOUT
    logout: () => {
        localStorage.removeItem('user')
        set({ user: null })
    },

    // Load from LocalStorage
    setUserFromStorage: () => {
        const stored = localStorage.getItem('user')
        if (stored) {
            set({ user: JSON.parse(stored) })
        }
    },
}))