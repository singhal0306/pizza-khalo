import { cartActions } from "./cartSlice";
import axios from "axios";

export const fetchCartData = () => {
    return async (dispatch) => {
        
        const userAvailable = localStorage.getItem('currentUser')
        if (userAvailable) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
            const cartItems = await axios.post('/api/cart/sendcartdata', {email: currentUser.email})
            dispatch(cartActions.setCartData({
                cartItems: cartItems.data
            }))
        }
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