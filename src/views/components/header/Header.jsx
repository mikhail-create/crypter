import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../../assets/logo_horizontal.png'

function Header() {
    return (
        <header>
            <div className={styles.layout}>
                <div className={styles.layout__left}>
                    <div className={styles.layout_logo}>
                        <div className={styles.layout_logo__image}>
                            <img srcSet={Logo} />
                        </div>
                    </div>
                </div>
                <div className={styles.layout__right}>
                    R
                </div>
            </div>
        </header>
    )
}

export default Header