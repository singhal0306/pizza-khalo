import React from "react"
import Logo from '../assets/pizza_khalo1.png'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 border-top shadow-lg" >
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <Link className="navbar-brand fs-4" to="/">
                            <img src={Logo} alt="Logo" width={50} height={50} className="d-inline-block align-text-box" />
                            <b className="p-3">Pizza Khalo</b>
                        </Link>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3 ">
                        <div className="navbar-brand pt-3">
                            <ul className="list-unstyled d-flex gap-5 justify-content-center">
                                <li><Link to="/" className="text-decoration-none">Home</Link></li>
                                <li><Link to="/orders" className="text-decoration-none">Orders</Link></li>
                                <li><Link to="/cart" className="text-decoration-none">Cart</Link></li>
                                <li><Link to="/logout" className="text-decoration-none">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <Link to="/" className="text-decoration-none">PizzaKhalo</Link>
            </div>

        </footer>
    )
}
export default Footer