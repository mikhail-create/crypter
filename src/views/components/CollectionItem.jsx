import React from 'react'
import NftImage from 'assets/NFT-1.png'
import AvatarImage from 'assets/avatar.png'

function CollectionItem({ title, itemsAmount, author }) {
    return (
        <div className='collectionitem'>
            <div className='collectionitem-images'>
                <img className='collectionitem-images--placeholder' srcSet={NftImage} />
                <div className='collectionitem-images--row'>
                    <img className='collectionitem-images--item' srcSet={NftImage} />
                    <img className='collectionitem-images--item' srcSet={NftImage} />
                    <img className='collectionitem-images--item' srcSet={NftImage} />
                </div>
            </div>
            <span className='collectionitem--title font-body--1-bold'>
                {title}
            </span>
            <div className='collectionitem-info'>
                <div className='collectionitem-info-user'>
                    <img  className='collectionitem-info--avatar' srcSet={AvatarImage} alt='Avatar Image' />
                    <span className='collectionitem-info--author font-caption--1-bold'>
                        {'by ' + author}
                    </span>
                </div>
                <span className='collectionitem-info--amount font-hairline--2'>
                    {itemsAmount + ' items'}
                </span>
            </div>
        </div>
    )
}

export default CollectionItem