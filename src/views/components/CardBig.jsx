import React from 'react'
import NftImage from '../../assets/NFT-1.png'
import AvatarImage from '../../assets/avatar.png'

function CardBig() {
    return (
        <div className='card-big'>
            <img srcSet={NftImage} alt='Nft image' />
            <div className='card-big-info'>
                <img srcSet={AvatarImage} alt='Avatar' />
                <div className='card-big-info--title'>
                    <span className='font-body--1-bold'>
                        The future of ETH®
                    </span>
                    <span className='font-caption--1-bold'>
                        18 in stock
                    </span>
                </div>
                <div className='card-big-info--price'>
                    <span className='font-caption--2'>
                        Highest bid
                    </span>
                    <div className='font-hairline--2'>
                        1.125 ETH
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBig