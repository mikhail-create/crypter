import React from 'react';
import CardBig from 'views/components/CardBig';
import CardSmall from 'views/components/CardSmall';
import AvatarImage from 'assets/avatar.png';
import Button from 'views/components/shared/Button';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import NFTList from '_helpers/NFTList'

const LatestCreator = ({ name, wallet, amount }) => {
    return (
        <div className='creator-card'>
            <div className='creator-card--profile'>
                <img srcSet={AvatarImage} alt='Avatar' />
                <div className='creator-card--amount font-caption--2-bold'>
                    {amount}
                </div>
            </div>
            <div className='creator-card-info'>
                <div className="creator-card-info--name font-caption--1-bold">
                    {name}
                </div>
                <div className="creator-card-info--wallet font-caption--2-bold">
                    {wallet}
                </div>
            </div>
        </div >
    )
}

function FeedSection() {
    return (
        <section className='feed'>
            <div className='feed--wrapper'>
                <CardBig />
                <div className='feed--list'>
                    <CardSmall title={NFTList[15].name} price={NFTList[15].price} amount={NFTList[15].stockAmount} imgSrc={NFTList[15].src} />
                    <CardSmall title={NFTList[16].name} price={NFTList[16].price} amount={NFTList[16].stockAmount} imgSrc={NFTList[16].src} />
                    <CardSmall title={NFTList[17].name} price={NFTList[17].price} amount={NFTList[17].stockAmount} imgSrc={NFTList[17].src} />
                </div>
            </div>
            <div className="feed-latest">
                <span className="feed-latest--title font-caption--2-bold">
                    Latest upload from creators 🔥
                </span>
                <div className='feed-latest--list'>
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                </div>
                <div className='feed-latest--btn'>
                    <Button text='Discover more' icon={<ArrowRight />} />
                </div>
            </div>
        </section>
    )
}

export default FeedSection