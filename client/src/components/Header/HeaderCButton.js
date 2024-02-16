import React, { useState, useEffect } from "react";
import CartIcon from "../../assets/cart.svg"
import styles from "./HeaderCButton.module.css"
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from "react-router-dom";
import { userLogout } from "../../store/user-action"
import { useSelector, useDispatch } from 'react-redux'

const HeaderCButton = props => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const isLoggedIn = useSelector(state => state.user.loginSuccess)
    const currentUser = useSelector(state => state.user.currentUser)

    const [btnIsHighlighted, setBtnIsHignlighted] = useState(false);

    const btnStyle = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        setBtnIsHignlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHignlighted(false)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [cartItems])

    return (
        <React.Fragment>
            <ul className="navbar-nav">
                <li className="nav-item d-flex justify-content-end">
                    <Link className={`${btnStyle} text-decoration-none`} to={"/cart"}  >
                        <img className={styles.icon} src={CartIcon} alt="cart icon" />
                        <span>Your Cart</span>
                        <span className={styles.badge}>
                            {cartItems.length}
                        </span>
                    </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-2 ">
                    {!isLoggedIn &&
                        <Link className="nav-link  m-3 my-2" aria-disabled='true' to={"/login"}><b>Login</b></Link>}
                    {isLoggedIn &&
                        <Dropdown className="mt-1 d-flex justify-content-end">
                            <Dropdown.Toggle className={`${styles.button}`} id="dropdown-basic" >
                                {currentUser.fname.toUpperCase()}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link className="dropdown-item" to="/orders">Orders</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button className="dropdown-item" onClick={() => { dispatch(userLogout()) }}>Logout</button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>}
                </li>
            </ul>
        </React.Fragment>
    )
}

export default HeaderCButton;