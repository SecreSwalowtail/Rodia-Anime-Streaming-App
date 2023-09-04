import { configureStore } from '@reduxjs/toolkit'
import stylesSlice from './reducers/stylesSlice'

export const store = configureStore({
    reducer: {
        styles: stylesSlice,
    },
})