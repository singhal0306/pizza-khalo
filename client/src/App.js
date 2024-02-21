import React, { useEffect } from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrderScreen from "./screens/OrderScreen"
import Header from './components/Header/Header';
// import Footer from './components/Footer';  

import { useDispatch, useSelector } from 'react-redux';
import { sendCartData } from './store/cart-actions';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { isLoggedIn } from './store/user-action';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const newCart = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(isLoggedIn());

  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    else {
      if (newCart.changed) {
        dispatch(sendCartData(newCart))
      }
    }
  }, [dispatch, newCart])

  return (
    <BrowserRouter>
      <div className='App'>

        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/cart' element={<CartScreen />}></Route>
          <Route path='/orders' element={<OrderScreen />}></Route>
          <Route path='/cancel' element={<RegisterScreen />}></Route>
          <Route path='/login' element={<LoginScreen />}></Route>
          <Route path='/register' element={<RegisterScreen />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
