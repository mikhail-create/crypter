import React, { useState } from 'react'
import NFT from 'assets/NFT.png'
import Avatar from 'assets/avatar.png'
import Avatar1 from 'assets/avatar-01.png'
import Avatar2 from 'assets/avatar-02.png'
import CustomLabel from 'views/components/shared/CustomLabel'
import NavItem from 'views/components/shared/NavItem'
import Button from 'views/components/shared/Button'

function ItemPage({ name }) {
  const [category, setCategory] = useState('Info');

  const handleFilterChange = (newFilter) => {
    setCategory((prevCategory) =>
      prevCategory === newFilter ? 'Info' : newFilter
    );
  };

  return (
    <div className='item'>
      <div className='item--preview'>
        <img srcSet={NFT} alt={name + ' NFT Image'} />
      </div>
      <div className='item-info'>
        <div className='item-info--stats'>
          <h3 className='font-headline--3'>
            The amazing art
          </h3>
          <div className='row'>
            <CustomLabel text='2.5 ETH' isPopularGhost={true} />
            <span className='font-button--1'>
              $4,429.87
            </span>
            <span className='font-button--1'>
              10 in stock
            </span>
          </div>
        </div>
        <div className='item-info--description'>
          <p className='font-body--2'>
            This NFT Card will give you Access to Special Airdrops. To learn more about UI8 please visit
            <a href='https://ui8.net'> https://ui8.net</a>
          </p>
        </div>
        <div className='item-info--filter'>
          <nav>
            {['Info', 'Owners', 'History', 'Bids'].map((item) => (
              <NavItem
                key={item}
                handleCategoryChange={handleFilterChange}
                name={item}
                isSelected={category === item}
              />
            ))}
          </nav>
        </div>
        <div className='item-info--data'>
          <div className='data--item'>
            <img srcSet={Avatar} alt='Owner Image' />
            <div>
              <span className='font-caption--1'>
                Owner
              </span>
              <span className='font-caption--1-bold'>
                Raquel Will
              </span>
            </div>
          </div>
          <div className='data--item'>
            <img srcSet={Avatar1} alt='Owner Image' />
            <div>
              <span className='font-caption--1'>
                Creator
              </span>
              <span className='font-caption--1-bold'>
                Selyna Mayert
              </span>
            </div>
          </div>
        </div>
        <div className='item-actions'>
          <div className='item-actions--bid'>
            <img srcSet={Avatar2} alt='User Avatar' />
            <div className='bid-info'>
              <div className='bid-info--row'>
                <span className='font-body--2-bold color--gray'>
                  Highest bid by
                </span >
                <span className='font-body--2-bold'>
                  Kohaku Tora
                </span>
              </div>
              <div className='bid-info--row'>
                <span className='font-body--1-bold'>
                  1.46 ETH
                </span>
                <span className='font-body--1-bold color--gray'>
                  $2,764.89
                </span>
              </div>
            </div>
          </div>
          <div className='item-actions--buttons'>
            <Button size='Medium' isColored={true} text='Purchase now' />
            <Button size='Medium' text='Place a bid' />
          </div>
          <div className='item-actions--fee'>
            <span className='font-caption--1-bold'>
              Service fee
            </span>
            <span className='font-caption--1-bold color--black'>
              1.5%
            </span>
            <span className='font-caption--1-bold'>
              2.563 ETH
            </span>
            <span className='font-caption--1-bold'>
              $4,540.62
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemPage