import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        changed: false
    },
    reducers: {
        setCartData(state, action) {
            state.cartItems = action.payload.cartItems
        },
        addToCart(state, action) {
            const newItem = action.payload.pizza;
            const varient = action.payload.varient;
            const quantity = action.payload.quantity;
            
            state.changed = true;
            const existingItem = state.cartItems.find(item => item._id === newItem._id && item.varient === varient)
            if (!existingItem) {
                const item = {
                    name: newItem.name,
                    _id: newItem._id,
                    image: newItem.image,
                    varient: varient,
                    quantity: quantity,
                    prices: newItem.prices,
                    price: newItem.prices[0][varient] * quantity
                }
                state.cartItems.push(item)
            }
            else {
                existingItem.quantity = +existingItem.quantity + +quantity
                existingItem.price = existingItem.prices[0][varient] * existingItem.quantity
            }
        },
        removeFromCart(state, action) {
            state.changed = true;
            const cartItems = state.cartItems.filter(item => {
                return item._id !== action.payload._id || item.varient !== action.payload.varient
            })
            state.cartItems = cartItems;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;