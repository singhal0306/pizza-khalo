import { cartActions } from "./cartSlice";
import axios from "axios";

export const fetchCartData = (email) => {
    return async (dispatch) => {
        const cartItems = await axios.post('/api/cart/sendcartdata', { email: email })
        dispatch(cartActions.setCartData({
            cartItems: cartItems.data
        }))
    }
}

export const sendCartData = (newCart) => {

    return async (dispatch, getstate) => {
        const currentUser = getstate().user.currentUser;
        const email = currentUser.email;
        const sendRequest = async () => {
            const response = await axios.post('/api/cart/updatecart', { email, newCart });
            console.log(response)
        };
        try {
            await sendRequest();
        } catch (error) {
            console.log(error)
        }
    };
};