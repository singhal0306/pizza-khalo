import React from 'react'
import CartComponent from '../components/CartComponent'
import Checkout from "../components/Checkout"
import { useSelector } from "react-redux"

export default function CartScreen() {
  const cartItems = useSelector(state => state.cart.cartItems)
  var subTotal = cartItems.reduce((total, item) => {
    return Number(total) + Number(item.price)
  }, 0)
  return (
    <div className="row justify-content-center" style={{ paddingTop: "7rem" }}>
      <div className="col-md-6 px-5">
        <h2 style={{ fontSize: '30px' }}>My Cart</h2>
        {cartItems.map((item) => {
          return (
            <CartComponent key={item._id} item={item} />
          )
        })}
      </div>
      <div className="col-md-4 text-end px-5">
        <h2 style={{ fontSize: "30px" }}>SubTotal : {subTotal} /-</h2>
        <Checkout />
      </div>
    </div>
  )
}
