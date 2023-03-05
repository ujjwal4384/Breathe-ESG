import React from 'react'
import styles from '../../css/content.module.css'

export default function Nav(props) {

    const handleClick = () => {
        console.log(props.isVisible);
        props.setIsVisible(!props.isVisible);
    }

    return (
        <div className={styles.nav}>
            <div className={styles.navHeader}>
                <div className={styles.navTitle} onClick={handleClick} >
                    <img src='/images/burgerIcon.png' alt='burger' style={{ cursor: 'pointer' }} />
                </div>
                <div className={styles.navTitle}>
                    Breathe ESG
                </div>
            </div>
            <div className={styles.navBtn}>
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className={styles.navLinks}>
                <a href="#" target="_blank">Logout</a>
            </div>
        </div>
    )
}
