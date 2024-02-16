import React from 'react'
import { Link } from 'react-router-dom'
import CartComponent from '../components/CartComponent'
import Checkout from "../components/Checkout"
import { useSelector } from "react-redux"

export default function CartScreen() {
  const cartItems = useSelector(state => state.cart.cartItems)
  var subTotal = cartItems.reduce((total, item) => {
    return Number(total) + Number(item.price)
  }, 0)
  return (
    <div style={{ height: '100vh' }}>
      <div className="row justify-content-center" style={{ paddingTop: "7rem" }}>
        <div className="col-md-6 py-4 object-fit-sm-contain border  border-3 rounded">
          <h2 className='border-bottom py-2 border-3 mx-auto' style={{ fontSize: '30px', width: '50%' }}>My Cart</h2>
          {(cartItems.length === 0) &&
            <div className='m-5 pt-2'>
              <h2 >Cart is Empty</h2>
              Add items to cart from <Link to={'/'}>here</Link>
            </div>
          }
          {cartItems.map((item) => {
            return (
              <CartComponent key={item._id} item={item} />
            )
          })}
        </div>
        <div className='col-md-2'></div>
        <div className="col-md-3 text-end px-5 pb-5 ">
          <div className='border px-5 pb-5 pt-4 border-3 rounded px-auto overflox-x-hidden'>
            <h2 style={{ fontSize: "30px" }}>SubTotal : {subTotal} /-</h2>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  )
}
