import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice';

export default function Pizza(props) {
    const dispatch = useDispatch();
    const pizza = props.pizza;
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const varientHandler = (event) => {
        setVarient(event.target.value)
    }
    const quantityHandler = (event) => {
        setQuantity(event.target.value);
    }

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({pizza, quantity, varient}))
    }

    return (
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <div style={{ height: "50px" }}>
                    <p>{pizza.name}</p>
                </div>
                <img src={pizza.image} className='img-fluid' style={{ height: '200px', width: '200px' }} alt="" />
            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>Varients:</p>
                    <select className='form-control' name="" value={varient} onChange={varientHandler}>
                        {pizza.varients.map((varient, index) => {
                            return <option key={index} value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className='w-100 m-1'>
                    <p>Quantity:</p>
                    <select className='form-control' name="" value={quantity} onChange={quantityHandler}>
                        {[...Array(5).keys()].map((x, index) => {
                            return <option key={index} value={index + 1}>{index + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100 align-middle'>
                    <h1 className='mt-2'>Price: {pizza.prices[0][varient] * quantity} Rs-
                    </h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn' style={{backgroundColor: '#8a2b06'}} onClick={addToCartHandler}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body className='text-center'>
                    <img src={pizza.image} alt="pizza" className='img-fluid' style={{ height: '250px' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' style={{background: "#8a2b06"}} onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
