import React from 'react'

import { useDispatch } from 'react-redux'
import { placeOrder } from "../store/order-action"

const Checkout = (props) => {
    const dispatch = useDispatch()
    const tokenHandler = () => {
        dispatch(placeOrder(props.amount))
    }
    return (
        <button className='btn btn-primary' style={{ background: '#4d1601' }} onClick={tokenHandler}>Pay now</button>
    )
}
export default Checkout;

