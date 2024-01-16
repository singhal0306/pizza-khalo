import React from 'react'
import styles from "./ScreenImage.module.css"
import mealsImage from "../../assets/meals.jpg"

export default function ScreenImage() {
    return (
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    )
}
