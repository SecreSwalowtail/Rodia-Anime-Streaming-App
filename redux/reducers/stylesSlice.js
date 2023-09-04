import {createSlice} from "@reduxjs/toolkit"

const stylesSlice = createSlice({
    name: 'styles',
    initialState: {
        bottomBarEnabled: false
    },
    reducers: {
        setBottomBar: (state, action) => {
            state.bottomBarEnabled = action.payload
        }
    }
})

export const {setBottomBar} = stylesSlice.actions;
export default stylesSlice.reducer