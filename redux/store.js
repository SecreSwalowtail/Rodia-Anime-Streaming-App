import { configureStore } from '@reduxjs/toolkit'
import stylesSlice from './reducers/stylesSlice'
import loadingSlice from './reducers/loadingSlice'

export const store = configureStore({
    reducer: {
        styles: stylesSlice,
        loading: loadingSlice,
    },
})