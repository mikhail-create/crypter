import React from 'react';
import AvatarImage from 'assets/avatar.png';
import Button from 'views/components/shared/Button';
import CustomLabel from 'views/components/shared/CustomLabel';

function CardSmall({ title, price, amount, imgSrc }) {
    return (
        <div className='card-small'>
            <img srcSet={imgSrc} alt='Nft Image' />
            <div className='card-small-info'>
                <div className='card-small-info--title font-body--2-bold'>
                    {title}
                </div>
                <div className='card-small-info--data'>
                    <img srcSet={AvatarImage} alt='Avatar' />
                    <div className='font-hairline--2'>
                        <CustomLabel text={price + ' ETH'} isPopularGhost={true} />
                    </div>
                    <span className='font-caption--1'>
                        1 of {amount}
                    </span>
                </div>
                <Button text="Place a bid" isColored={true} />
            </div>
        </div>
    )
}

export default CardSmall