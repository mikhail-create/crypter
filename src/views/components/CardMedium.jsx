import React from 'react'
import NftImage from '../../assets/NFT-1.png'
import AvatarImage from '../../assets/avatar.png'
import AvatarImage01 from '../../assets/avatar-01.png'
import AvatarImage02 from '../../assets/avatar-02.png'
import { ReactComponent as CandlesticksUp } from '../../assets/icons/candlesticks-up.svg'

function CardMedium({ title, instaPrice, stockAmount, bid, isNewBids }) {
    return (
        <div className='card-medium'>
            <img srcSet={NftImage} alt={title + ' Nft Image'} />
            <div className='card-medium-description'>
                <div className='stats'>
                    <span className='stats--title'>
                        {title}
                    </span>
                    <div className='stats--price'>
                        {instaPrice + ' ETH'}
                    </div>
                </div>
                <div className='stats'>
                    <div className='stats--bidders'>
                        <img srcSet={AvatarImage} />
                        <img srcSet={AvatarImage01} />
                        <img srcSet={AvatarImage02} />
                    </div>
                    <span className='stats--stock'>
                        {stockAmount + ' in stock'}
                    </span>
                </div>
                <div className='card-medium--divider'></div>
                <div className='stats'>
                    <div className='stats-highest'>
                        <CandlesticksUp />
                        <span className='stats-highest--label'>
                            Highest bid
                        </span>
                        <span className='stats-highest--bid'>
                            {bid + ' ETH'}
                        </span>
                    </div>
                    <div className='stats--indicator'>
                        {isNewBids && 'New bid 🔥'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMedium