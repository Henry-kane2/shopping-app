import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart'

export const Store = configureStore({
    reducer:{
        cart:cartReducer,
       // user:
    }
})