const { createSlice } = require("@reduxjs/toolkit")


const initialState = '$'

const currencySlice = createSlice({
    name : 'currency',
    initialState,
    reducers : {
        // addItem(state, action){
        // payload =    {
        //         url : 'https://www.amazon.com/dp/B0BVL4VRXN?tag=gsmarena093-20&linkCode=osi&th=1&psc=1',
        //         quantity : 1,
               
        //     },

        //     state.cart.push(action.payload)
        // },

        changeCurrency(state, action){
          state.currency = action.payload
        }

    }
})


 export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;