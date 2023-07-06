import React from 'react'
import AvatarImage from 'assets/avatar.png'
import CustomLabel from 'views/components/shared/CustomLabel'
import NFTList from '_helpers/NFTList'

function CardBig() {
    return (
        <div className='card-big'>
            <img src={NFTList[11].src} alt={NFTList[11].name} />
            <div className='card-big-info'>
                <img srcSet={AvatarImage} alt='Avatar' />
                <div className='card-big-info--title'>
                    <span className='font-body--1-bold'>
                        {NFTList[11].name}
                    </span>
                    <span className='font-caption--1-bold'>
                    {NFTList[11].stockAmount} in stock
                    </span>
                </div>
                <div className='card-big-info--price'>
                    <span className='font-caption--2'>
                        Highest bid
                    </span>
                    <div className='font-hairline--2'>
                        <CustomLabel text={NFTList[11].highestBid + ' ETH'} isPopularGhost={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBig