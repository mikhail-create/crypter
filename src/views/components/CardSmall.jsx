import React from 'react';
import NftImage from 'assets/NFT-1.png';
import AvatarImage from 'assets/avatar.png';
import Button from 'views/components/shared/Button';
import CustomLabel from 'views/components/shared/CustomLabel';

function CardSmall({ title, price, amount }) {
    return (
        <div className='card-small'>
            <img srcSet={NftImage} alt='Nft Image' />
            <div className='card-small-info'>
                <span className='card-small-info--title font-body--2-bold'>
                    {title}
                </span>
                <div className='card-small-info--data'>
                    <img srcSet={AvatarImage} alt='Avatar' />
                    <div className='font-hairline--2'>
                        <CustomLabel text={price + ' ETH'} isPopularGhost={true} />
                    </div>
                    <span className='font-caption--1'>
                        1 of {amount}
                    </span>
                </div>
                <Button text="Place a bid" isColored={true} isBiggerFont={false} />
            </div>
        </div>
    )
}

export default CardSmall