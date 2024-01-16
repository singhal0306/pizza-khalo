import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        success: false,
        orders: [],
        error: {}
    },
    reducers: {
        placeOrderRequest(state) {
            state.loading = true;
        },
        placeOrderSuccess(state) {
            state.loading = false
            state.success = true
        },
        placeOrderFails(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        getOrdersRequest(state) {
            state.loading = true;
        },
        getOrdersSuccess(state, action) {
            state.loading = false;
            state.orders = action.payload.orders
        }, 
        getOrdersFails(state, action) {
            state.loading = false;

        }
    }
})

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;