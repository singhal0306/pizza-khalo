import { orderActions } from "./orderSlice";
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';

export const placeOrder = (subtotal) => {
    return async (dispatch, getstate) => {
        dispatch(orderActions.placeOrderRequest());
        const currentUser = getstate().user.currentUser;
        const cartItems = getstate().cart.cartItems;
        // console.log(cartItems)
        // console.log(currentUser)
        try {
            const stripe = await loadStripe('pk_test_51OX0LZSGgfaszQ2KDuAvZQP4lL5ykezfB1aJexoGlNbtiIQOoF7Ry1OBxfMX8D9FYzEItTHPF6pCcpNEdLB9uq4B00xRUAYjaa');
            const response = await axios.post('/api/orders/placeorder', { subtotal, currentUser, cartItems })
            dispatch(orderActions.placeOrderSuccess())
            console.log(response)
            const result = stripe.redirectToCheckout({
                sessionId: response.data.id,
            })
            if (result.error) {
                throw new Error(result.error)
            }
        } catch (error) {
            dispatch(orderActions.placeOrderFails())
            console.log(error)
        }
    }
}

export const fetchOrdersData = () => {
    return async (dispatch, getstate) => {
        const fetchOrders = async () => {
            const currentUser = getstate().user.currentUser;
            dispatch(orderActions.getOrdersRequest())
            const response = await axios.post("/api/orders/getallorders", { userId: currentUser._id });
            const data = await response.data;
            return data;
        }
        try {
            const ordersData = await fetchOrders();
            dispatch(orderActions.getOrdersSuccess({
                orders: ordersData,
            }))
        } catch (error) {
            console.log(error);
            dispatch(orderActions.getOrdersFails({
                error: error
            }))
        }
    }
}