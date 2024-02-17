const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
     cart : [],
    
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem(state, action){
        // payload =    {
        //         url : 'https://www.amazon.com/dp/B0BVL4VRXN?tag=gsmarena093-20&linkCode=osi&th=1&psc=1',
        //         quantity : 1,
               
        //     },

            state.cart.push(action.payload)
        },

        deleteItem(state, action){
            //payload = url
            state.cart = state.cart.filter((item) => item.url !== action.payload)
        },

        increaseItemQuantity(state, action){
            //payload = url

            const item = state.cart.find((item) => item.url === action.payload)
            item.quantity++
        },

        decreaseItemQuantity(state, action){
              //payload = url

              const item = state.cart.find((item) => item.url === action.payload)
             if(item.quantity < 2){
                state.cart = state.cart.filter((item) => item.url !== action.payload)
             }else{
            item.quantity--
        }
        },

        clearCart(state,){
            state.cart = []
        },
    }
})


 export const { addItem, deleteItem, decreaseItemQuantity, increaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;