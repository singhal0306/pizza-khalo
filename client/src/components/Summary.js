import React from "react";
import styles from "./Summary.module.css"
import Logo from '../assets/pizza_khalo1.png'

const Summary = () => {
    return <section className={`${styles.summary} d-md-flex`}>
        <div className="px-4">
            <img src={Logo} alt="logo" width={250} height={250}/>
        </div>
        <div className="ps-4">
            <h2>Delicious Food, Deliver to you</h2>
            <p>Choose your favourite meal from our broad section of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </div>
    </section>
}
export default Summary;