import React, { useState } from 'react'
import Nav from './Nav'
import SideNav from './SideNav'
import styles from '../../css/content.module.css'
import Content from './Content'

export default function LandingPage() {
    const [isVisible, setIsVisible] = React.useState(true);

    return (
        <div className={styles.backgroundWhite}>
            <Nav setIsVisible={setIsVisible} isVisible={isVisible} />
            <div style={{ display: 'flex', gap: '5em' }}>
                <div style={{ width: '20%', opacity: isVisible ? 1 : 0 }}>
                    <SideNav />
                </div>
                <div style={{ width: '80%', }}>
                    <Content />
                </div>
            </div>
        </div>
    )
}
