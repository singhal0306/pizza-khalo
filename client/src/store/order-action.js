import { orderActions } from "./orderSlice";
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';

export const placeOrder = () => {
    return async (dispatch, getstate) => {
        dispatch(orderActions.placeOrderRequest());
        const currentUser = getstate().user.currentUser;
        const cartItems = getstate().cart.cartItems;
        try {
            const stripe = await loadStripe('pk_test_51OX0LZSGgfaszQ2KDuAvZQP4lL5ykezfB1aJexoGlNbtiIQOoF7Ry1OBxfMX8D9FYzEItTHPF6pCcpNEdLB9uq4B00xRUAYjaa');
            const response = await axios.post('/api/orders/placeorder', { currentUser, cartItems })
            dispatch(orderActions.placeOrderSuccess())
            // console.log(response)
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

export const fetchOrdersData = (userId) => {
    return async (dispatch, getstate) => {
        const fetchOrders = async () => {
            dispatch(orderActions.getOrdersRequest())
            const response = await axios.post("/api/orders/getallorders", { userId });
            const data = response.data;
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