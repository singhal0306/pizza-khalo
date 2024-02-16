import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Loader from "../components/Loader"
import Success from "../components/Success"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Error from "../components/Error"
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from '../store/user-action'

export default function RegisterScreen() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPossword] = useState('');
  
  const register = useSelector(state => state.user)
  const { loading, registerSuccess } = register;

  const dispatch = useDispatch()
  const submitHandler = (event) => {
    event.preventDefault()
    if (password !== cPassword) {
      toast("Password do not match!");
    } else {
      const user = { fname, lname, email, password }
      setFName(''); setLName(''); setEmail(''); setCPossword(''); setPassword('')
      dispatch(userRegistration(user))
    }
  }
  return (
    <div className="container" style={{ paddingTop: "7rem" }} >
      <div className='row justify-content-center'>
        <div className='col-md-5 mb-3 border pt-2 px-5 rounded'>
          {loading && <Loader />}
          {registerSuccess && <Success success="User Registered Successfully"/> }
          <ToastContainer />
          <h4 className='text-center m-2 pb-3'> Register</h4>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label d-flex">First name</label>
              <input type="text" className="form-control" id="validationCustom01" value={fname} onChange={(e) => setFName(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label d-flex">Last name</label>
              <input type="text" className="form-control" id="validationCustom02" value={lname} onChange={(e) => setLName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label d-flex">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='mb-3'>
              <label htmlFor="inputPassword1" className="form-label d-flex">Password</label>
              <input type="password" id="inputPassword1" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='mb-3'>
              <label htmlFor="inputPassword2" className="form-label d-flex">Confirm Password</label>
              <input type="password" id="inputPassword2" className="form-control" value={cPassword} onChange={(e) => setCPossword(e.target.value)} required />
            </div>
            <div className="col-12 text-start">
              <button className="btn btn-primary" style={{ background: '#8a2b06' }} type="submit" onClick={submitHandler}>Register</button>
              <Link className='mx-2' to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}