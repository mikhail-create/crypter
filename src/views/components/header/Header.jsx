import React, { useState } from 'react'
import Logo from 'assets/logo_horizontal.png'
import Avatar from 'assets/avatar.png'
import { ReactComponent as Menu } from 'assets/icons/menu.svg'
import SearchBar from './SearchBar'
import Notification from './Notification'
import Button from 'views/components/shared/Button'
import scrollToSection from 'hooks/useScrollToSection'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header id='header'>
      <div className="layout">
        <div className="layout-left">
          <div className="left-logo">
            <div className="left-logo--image" onClick={() => (window.location.href = '/')}>
              <img srcSet={Logo} alt="Logo" />
            </div>
          </div>
          <div className="left--divider" />
          <div className="left--link font-button font-button--2">
            <a onClick={() => scrollToSection('discover')}>Discover</a>
          </div>
          <div className="left--link font-button font-button--2">How it work</div>
        </div>
        <div className="layout-right">
          <div className="layout-right--search">
            <SearchBar />
          </div>
          <div className="layout-right--notification">
            <Notification />
          </div>
          <div className="layout-right--avatar">
            <img srcSet={Avatar} alt="Avatar Image" />
          </div>
          <div className={`layout-right--menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <Menu />
          </div>
          <div className="layout-right--buttons">
            <Button path="upload" text="Upload" isColored={true} />
            <Button path="connect" text="Connect Wallet" />
          </div>
        </div>
      </div>
      <div className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="header-menu--item font-body--2-bold" onClick={() => scrollToSection('discover')}>
          Discover
        </div>
        <div onClick={toggleMenu} className="header-menu--item font-body--2-bold">
          How it work
        </div>
        <div onClick={toggleMenu} className="header-menu--item font-body--2-bold">
          <Link to="upload">Upload</Link>
        </div>
        <div onClick={toggleMenu} className="header-menu--item font-body--2-bold">
          <Link to="Connect">Connect Wallet</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
