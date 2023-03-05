import React from 'react'
import styles from '../../css/login.module.css';

function SignUpImage() {
    return (
        <>
            <div className={styles.imagesDiv}>
                <img src="/images/logo.png" alt="logo" className={styles.logoImg} />
                <img src="/images/loginPageImage.png" alt="login page" className={styles.heroImage} />
            </div>
        </>
    )
}

export default SignUpImage