'use client'
import { Provider } from "react-redux"
import { store } from "@/stores/store"

interface WrapperProps {
    children?: React.ReactNode
}

export default function ReduxWrapper({ children }: WrapperProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
