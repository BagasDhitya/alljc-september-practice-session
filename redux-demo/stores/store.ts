'use client'
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './theme-slice/index'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})