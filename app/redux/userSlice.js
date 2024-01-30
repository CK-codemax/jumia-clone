import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    username : ['motorola_moto_g14-12447', 'motorola_moto_g14-12447', 'motorola_razr_40_ultra-12169',],
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        updateName(
            state, action
        ){
            state.username = action.payload
        }
    }
})

export const { updateName } = userSlice.actions;

export default userSlice.reducer;