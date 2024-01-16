import React from "react";
import styles from "./Header.module.css"
import HeaderCButton from "./HeaderCButton";

const Header = () =>{
    return <React.Fragment>
        <header className={`${styles.header} `}>
        <a className="navbar-brand fs-4" href="/"><b>Pizza Khalo</b></a>
            <HeaderCButton />
        </header>
    </React.Fragment>
}
export default Header;