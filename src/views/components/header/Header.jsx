import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../../assets/logo_horizontal.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Button from '../button/Button'

function Header() {
    return (
        <header>
            <div className={styles.layout}>
                <div className={styles.layout_left}>
                    <div className={styles.left_logo}>
                        <div className={styles.left_logo__image}>
                            <img srcSet={Logo} />
                        </div>
                    </div>
                    <div className={styles.left__divider} />
                    <div className={styles.left__link}>
                        Discover
                    </div>
                    <div className={styles.left__link}>
                        How it work
                    </div>
                </div>
                <div className={styles.layout_right}>
                    <SearchBar />
                    <Notification />
                    <div className={styles.right__buttons}>
                        <Button isColored={true} text='Upload' />
                        <Button isColored={false} text='Connect Wallet' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header