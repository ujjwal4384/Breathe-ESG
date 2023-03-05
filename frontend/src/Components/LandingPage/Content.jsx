import React from 'react'
import styles from '../../css/content.module.css'

export default function Content() {
    return (
        <div>
            <h1>Welcome to <span style={{ color: '#32BC8A' }}>Breathe ESG</span></h1>
            <h4 style={{ fontWeight: 300 }}>Home/ Registration</h4>
            <div style={{ display: 'flex' }}>
                <div className={styles.cards}>
                    <div className={styles.boxLeft}>
                        <img src='/images/manWorking.png' alt="svg1" title='svg1' />
                    </div>
                    <div>
                        <div className={styles.boxRight}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  magna aliqua
                            </p>
                            <button style={{ backgroundColor: '#32BC8A' }}> Create Organisation</button>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cards} style={{ backgroundColor: 'rgba(148, 195, 205, 0.2)' }}>
                    <div className={styles.boxLeft}>
                        <img src='/images/youngMan.png' alt="svg2" title='svg2' />
                    </div>
                    <div>
                        <div className={styles.boxRight}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  magna aliqua
                            </p>
                            <button style={{ backgroundColor: '#92C3CD' }}> Create Organisation</button>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
