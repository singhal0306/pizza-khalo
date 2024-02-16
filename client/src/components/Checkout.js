import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { placeOrder } from "../store/order-action"
import Loader from "./Loader"

const Checkout = () => {
    const [isClicked, setIsClicked] = useState(false)
    const dispatch = useDispatch()
    const tokenHandler = () => {
        setIsClicked(true);
        dispatch(placeOrder());
        
    }
    return (
        <React.Fragment>
            {!isClicked && <button className='btn btn-primary' style={{ background: '#4d1601' }} onClick={tokenHandler}>Pay now</button>}
            {isClicked &&
                <div className='text-center '>
                    <Loader />
                </div>
            }
        </React.Fragment>
    )
}
export default Checkout;

