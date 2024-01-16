import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../store/user-action'
import Loader from "../components/Loader"
import Error from '../components/Error'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const loginState = useSelector(state => state.user);
  const { loading, error } = loginState;
  if(error !== ''){
    setShowError(true)
  } 

  const loginHandler = (event) => {
    event.preventDefault();
    const user = { email, password }
    setEmail(''); setPassword('');
    dispatch(userLogin(user));
  }
  return (
    <div className="container" style={{ paddingTop: "7rem" }}>
      <div className='row justify-content-center'>
        <div className='col-md-5 mb-3 border pt-3 px-5 pb-5 rounded'>
          {loading && <Loader />}
          {showError   && <Error error={error} />}
          <h4 className='text-center m-2 pb-3'> Login</h4>
          <form className="row g-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label d-flex">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className='mb-3'>
              <label htmlFor="inputPassword5" className="form-label d-flex">Password</label>
              <input type="password" id="inputPassword5" className="form-control" placeholder='........' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="col-12 text-start">
              <button className="btn btn-primary" style={{ backgroundColor: '#8a2b06' }} type="submit" onClick={loginHandler}>Login</button>
              <a className='mx-2' href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}