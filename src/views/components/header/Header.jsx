import React from 'react'
import Logo from '../../../assets/logo_horizontal.png'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Button from '../Button'

function Header() {
    return (
        <header>
            <div className="layout">
                <div className="layout-left">
                    <div className="left-logo">
                        <div className="left-logo--image">
                            <img srcSet={Logo} alt='Logo'/>
                        </div>
                    </div>
                    <div className="left--divider" />
                    <div className="left--link">
                        Discover
                    </div>
                    <div className="left--link">
                        How it work
                    </div>
                </div>
                <div className="layout-right">
                    <SearchBar />
                    <Notification />
                    <div className="right--buttons">
                        <Button isColored={true} text='Upload' />
                        <Button isColored={false} text='Connect Wallet' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header