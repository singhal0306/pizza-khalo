import { configureStore } from "@reduxjs/toolkit"
import pizzaReducer from "./pizzaSlice"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"
import orderReducer from "./orderSlice"

const store = configureStore({
    reducer: { 
        pizzas: pizzaReducer,
        cart: cartReducer,
        user: userReducer,
        order: orderReducer
    }
})

export default store;