import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './redux/CartSlice';
import bankReducre from './redux/BankSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        bank: bankReducre
    }
})