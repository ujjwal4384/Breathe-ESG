import React from 'react'
import styles from '../../css/content.module.css'

export default function SideNav() {
    return (
        <>
            <div className={styles.sidenav}>
                <ul className={styles.sidenavUl}>
                    <li className={styles.user}>
                        <img src="/images/profilePic.png" alt="User" />
                        <p>{sessionStorage.getItem('breathe_username')}</p>
                        <p style={{ fontWeight: 400 }}>NoCap Meta Private Limited</p>
                    </li>
                    <li className={styles.item}>
                        <a href="#">
                            <img style={{ height: '1em', paddingRight: '0.5em' }} src="/images/accountsIcon.png" alt='account' />
                            Accounts
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#">
                            <img style={{ height: '1em', paddingRight: '1.3em' }} src="/images/projectsIcon.png" alt='project' />
                            Projects
                        </a>
                    </li>
                    <li className={styles.item} style={{ paddingTop: '2em' }}>
                        <a style={{ backgroundColor: 'rgba(60, 64, 93, 0.2)', borderRadius: '8px', width: '60%', paddingLeft: '0.5em', marginLeft: '1.5em' }} href="#">
                            <div>
                                <img style={{ height: '1em', paddingRight: '0.6em' }} src="/images/filesIcon.png" alt='file' />
                                Registration
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
