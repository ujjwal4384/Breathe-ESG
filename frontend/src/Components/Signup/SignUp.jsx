import React from 'react'
import styles from '../../css/login.module.css'
import SignUpImage from './SignUpImage'
import SignUpCard from './SignUpCard'

export default function SignUp() {
    return (
        <div className={styles.loginParentContainer}>
            <SignUpImage />
            <SignUpCard />
        </div>
    )
}
