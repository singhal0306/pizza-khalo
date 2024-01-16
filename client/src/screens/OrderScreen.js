import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrdersData } from '../store/order-action';

export default function OrderScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdersData())
  }, [dispatch])

  const orderData = useSelector(state => state.order.orders);
  console.log(orderData);
  return (
    <div style={{ marginTop: '7rem' }}>
      <h2>My orders</h2>
      {orderData.map((order) => {
        return (
          <div className='row justify-content-center' key={order._id}>
            <div className='col-md-8 m-2 p-2' >
              <div className='flex-container px-5 py-2 rounded' style={{ background: '#b94517', color: 'white', font: '10px' }}>
                <div className='text-start w-100 m-1'>
                  <h2 style={{ fontSize: '25px' }}>Items</h2>
                  <hr />
                  {order.orderItems.map(item => {
                    return <div key={item._id}>
                      <h1>{item.name} <br />
                       [{item.varient}] * {item.quantity} = {item.price}</h1>
                    </div>
                  })}
                </div>
                <div className='text-start w-75 m-1'>
                  <h2 style={{ fontSize: '25px' }}>Address</h2>
                  <hr />
                  <h1>Street: {order.shippingAddress.line1}</h1>
                  <h1>City: {order.shippingAddress.city}</h1>
                  <h1>State: {order.shippingAddress.state}</h1>
                  <h1>Pincode: {order.shippingAddress.postal_code}</h1>
                </div>
                <div className='text-start w-100 m-1'>
                  <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                  <hr />
                  <h1>Order Amount: {(order.orderAmount / 100)} /-</h1>
                  <h1>Date: {order.updatedAt.substring(0, 10)}</h1>
                  <h1>Order Id: {order._id}</h1>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
