import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        // action : type : cart/addToCart
        addToCart: (state, action)=>{
            // console.log("state...", state);
            // console.log("action...", action);
            state.cart.push(action.payload);
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;