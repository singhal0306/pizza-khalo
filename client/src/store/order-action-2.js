import React, {useState, useEffect} from "react";
import { orderActions } from "./orderSlice";
import { loadStripe } from '@stripe/stripe-js';

import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useCartElement,
    useElements
} from "@stripe/react-stripe-js"

export const placeOrder =(subTotal) =>{
    return async (dispatch, getstate) => {
        dispatch(orderActions.placeOrderRequest());
        const currentUser = getstate().user.currentUser;
        const cartItems = getstate().cart.cartItems;
        const stripe = useStripe()
        const element = useElements()

        const [email, setEmail ]= useState("");
        const [message, setMessage]= useState(null);
        const [isLoading, setIsLoading ]= useState(false);

        useEffect(()=>{
            isLoading(!stripe){
                return
            }
            const clientSecret = ()
        }, [])
        try {
            const stripe = await loadStripe('pk_test_51OX0LZSGgfaszQ2KDuAvZQP4lL5ykezfB1aJexoGlNbtiIQOoF7Ry1OBxfMX8D9FYzEItTHPF6pCcpNEdLB9uq4B00xRUAYjaa');

        } catch (error) {
            dispatch(orderActions.placeOrderFails())
            console.log(error)
        }
    }
} 