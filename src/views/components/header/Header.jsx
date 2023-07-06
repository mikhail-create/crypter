import React from 'react'
import Logo from 'assets/logo_horizontal.png'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Button from 'views/components/shared/Button'

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
                    <div className="left--link font-button font-button--2">
                        Discover
                    </div>
                    <div className="left--link font-button font-button--2">
                        How it work
                    </div>
                </div>
                <div className="layout-right">
                    <SearchBar />
                    <Notification />
                    <div className="right--buttons">
                        <Button text='Upload' isColored={true} />
                        <Button text='Connect Wallet' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header