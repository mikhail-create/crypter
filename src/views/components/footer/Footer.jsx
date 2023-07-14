import React from 'react'
import Logo from 'assets/logo_horizontal.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer--wrapper">
        <div className='footer-logo'>
          <img src={Logo} alt='Logo' />
          <span className='font-body--1'>
            The New Creative <br /> Economy.
          </span>
        </div>
        <div className='footer-column'>
          <label className='font-body--2-bold'>
            Crypter.
          </label>
          <nav>
            <ul className='footer-column--nav font-button--2'>
              <li>
                Discover
              </li>
              <li>
                Connect wallet
              </li>
              <li>
                Create item
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer-column'>
          <label className='font-body--2-bold'>
            Info.
          </label>
          <nav>
            <ul className='footer-column--nav font-button--2'>
              <li>
                Download
              </li>
              <li>
                Demos
              </li>
              <li>
                Support
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer-subscribe'>
          <label className='footer-subscribe--label font-body--2-bold'>
            Join Newsletter
          </label>
          <span className='font-caption--1'>
            Subscribe our newsletter to get more free design course and resource
          </span>
          <input className='font-caption--1' placeholder='Enter your email'>
          </input>
        </div>
      </div>
    </footer>
  )
}

export default Footer