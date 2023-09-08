import {createSlice} from "@reduxjs/toolkit"

const loadingStatus = createSlice({
    name: 'loading',
    initialState: {
        trendingStatus: 0
    },
    reducers: {
        setTrendingStatus: (state, action) => {
            state.trendingStatus = action.payload
        }
    }
})

export const {setTrendingStatus} = loadingStatus.actions;
export default loadingStatus.reducer