import React, { useEffect } from 'react';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrderScreen from "./screens/OrderScreen"
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from './store/cart-actions';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { isLoggedIn } from './store/user-action';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const newCart = useSelector(state => state.cart)
  
  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch])

    useEffect(()=>{
      dispatch(fetchCartData());
    }, [dispatch])
    
  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return
    }
    else{
      if(newCart.changed){
        dispatch(sendCartData(newCart))
      }
    }
  }, [dispatch, newCart])

  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/cart' element={<CartScreen/>}></Route>
          <Route path='/login' element={<LoginScreen/>}></Route>
          <Route path='/register' element={<RegisterScreen/>}></Route>
          <Route path='/orders' element={<OrderScreen/>}></Route>
          <Route path='/cancel' element={<RegisterScreen/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;
