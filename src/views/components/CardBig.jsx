import React from 'react'
import AvatarImage from 'assets/avatar.png'
import CustomLabel from 'views/components/shared/CustomLabel'
import NFT from 'assets/NFT.webp'

function CardBig() {
  return (
    <div className='card-big'>
      <img src={NFT} alt='Pop art portrait' />
      <div className='card-big-info'>
        <img srcSet={AvatarImage} alt='Avatar' />
        <div className='card-big-info--title'>
          <span className='font-body--1-bold'>
          Pop art portrait
          </span>
          <span className='font-caption--1-bold'>
            4 in stock
          </span>
        </div>
        <div className='card-big-info--price'>
          <span className='font-caption--2'>
            Highest bid
          </span>
          <div className='font-hairline--2'>
            <CustomLabel text='5.49 ETH' isPopularGhost={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBig