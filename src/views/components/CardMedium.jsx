import React, { useState } from 'react';
import Button from 'views/components/shared/Button';
import NftImage from 'assets/NFT-1.png';
import AvatarImage from 'assets/avatar.png';
import AvatarImage01 from 'assets/avatar-01.png';
import AvatarImage02 from 'assets/avatar-02.png';
import { ReactComponent as CandlesticksUp } from 'assets/icons/candlesticks-up.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as ScatterUp } from 'assets/icons/scatter-up.svg';
import CustomLabel from 'views/components/shared/CustomLabel';

function CardMedium({ title, instaPrice, stockAmount, bid, isNewBids }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className='card-medium'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            {
                isHovered &&
                <div className='card-hover' >
                    <div className='card-hover--header'>
                        <span className='card-hover--indicator font-hairline--2'>
                            purchasing !
                        </span>
                        <button className='card-hover--like'>
                            <Heart />
                        </button>
                    </div>
                    <div className='card-hover--button'>
                        <Button
                            text='Place a bid'
                            isColored={true}
                            icon={<ScatterUp />}
                        />
                    </div>
                </div>
            }
            <img srcSet={NftImage} alt={title + ' Nft Image'} />
            <div className='card-medium-description'>
                <div className='stats'>
                    <span className='stats--title font-body--2-bold'>
                        {title}
                    </span>
                    <div className='stats--price font-hairline--2'>
                        <CustomLabel text={instaPrice + ' ETH'} isPopularGhost={true} />
                    </div>
                </div>
                <div className='stats'>
                    <div className='stats--bidders'>
                        <img srcSet={AvatarImage} />
                        <img srcSet={AvatarImage01} />
                        <img srcSet={AvatarImage02} />
                    </div>
                    <span className='stats--stock font-caption--1-bold'>
                        {stockAmount + ' in stock'}
                    </span>
                </div>
                <div className='card-medium--divider'></div>
                <div className='stats'>
                    <div className='stats-highest'>
                        <CandlesticksUp />
                        <span className='stats-highest--label font-caption--2'>
                            Highest bid
                        </span>
                        <span className='stats-highest--bid font-caption--2-bold'>
                            {bid + ' ETH'}
                        </span>
                    </div>
                    <div className='stats--indicator font-caption--2'>
                        {isNewBids && 'New bid 🔥'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMedium