import React from "react";
import CartIcon from "../../assets/cart.svg"
import styles from "./HeaderCButton.module.css"
import Dropdown from 'react-bootstrap/Dropdown';

import { userLogout } from "../../store/user-action"
import { useSelector, useDispatch } from 'react-redux'

const HeaderCButton = props => {
    const dispatch = useDispatch()
    const length = useSelector(state => state.cart.cartItems)
    const isLoggedIn = useSelector(state => state.user.loginSuccess)
    const currentUser = useSelector(state => state.user.currentUser)
    
    // console.log(currentUser)
    // const [btnIsHighlighted, setBtnIsHignlighted] = useState(false);

    // const btnStyle = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

    // useEffect(()=>{
    //     if(cartCtx.items.length === 0){
    //         return;
    //     }
    //     setBtnIsHignlighted(true)
    //     const timer = setTimeout(() =>{
    //         setBtnIsHignlighted(false)
    //     }, 300)

    //     return () =>{
    //         clearTimeout(timer)
    //     }
    // }, [cartCtx.items])

    return (
        <React.Fragment>
            <ul className="nav nav-pills">
                <li className="nav-item mx-2">
                    {!isLoggedIn &&
                        <a className="nav-link ms-3 my-2" href="/login"><b>Login</b></a>}
                    {isLoggedIn &&
                        <Dropdown className="mt-1">
                            <Dropdown.Toggle className={`${styles.button}`} style={{ textDecoration: 'none' }} id="dropdown-basic" >
                                {currentUser.fname.toUpperCase()}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {dispatch(userLogout()) }}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>}
                </li>
                <li className="nav-item">
                    <a className={styles.button} href="/cart" style={{ textDecoration: 'none' }}>
                        <img className={styles.icon} src={CartIcon} alt="cart icon" />
                        <span>Your Cart</span>
                        <span className={styles.badge}>
                                {length.length}
                        </span>
                    </a>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default HeaderCButton;