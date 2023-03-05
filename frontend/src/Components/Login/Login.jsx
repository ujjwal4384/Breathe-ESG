import React from 'react'
import LoginImage from './LoginImage'
import LoginCard from './LoginCard'
import styles from '../../css/login.module.css'

export default function Login() {
    return (
        <div className={styles.loginParentContainer}>
            <LoginImage />
            <LoginCard />
        </div>
    )
}
