import React from "react";
import { Link } from "react-router-dom";
import HeaderCButton from "./HeaderCButton";
import Logo from "../../assets/pizza_khalo1.png"

const Header = () => {
    return <nav className="navbar navbar-expand-lg fixed-top py-3 px-5 w-100" style={{ backgroundColor: '#8a2b06', zIndex: 99 }}>
        <div className="container-fluid px-md-5">
            <Link className="navbar-brand fs-4" to="/">
                <img src={Logo} alt="Logo" width={50} height={50} className="d-inline-block align-text-box"/>
                <b className="p-3 d-none d-sm-inline">Pizza Khalo</b>
            </Link>
            <button
                className="navbar-toggler"  
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                <HeaderCButton />
            </div>
        </div>
    </nav>
}
export default Header;