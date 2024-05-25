import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart : []
}

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
         addToCart(state,action){
               state.cart.push(action.payload);
         } ,

         removeFromCart(state, action){
           state.cart =  state.cart.filter(item => item.id !== action.payload.id)
         }
    }
})

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;