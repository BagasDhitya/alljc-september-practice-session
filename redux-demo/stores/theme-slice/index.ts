'use client'
import { createSlice } from "@reduxjs/toolkit";

interface ModeProps {
    mode: 'light' | 'dark'
}

const initialState: ModeProps = {
    mode: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.mode === 'light') {
                state.mode = 'dark'
            } else {
                state.mode = 'light'
            }
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer