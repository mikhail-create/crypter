import React from 'react'
import CardBig from '../CardBig'
import CardSmall from '../CardSmall'
import AvatarImage from '../../../assets/avatar.png'
import Button from '../Button'

const LatestCreator = ({ name, wallet, amount }) => {
    return (
        <div className='creator-card'>
            <div className='creator-card--profile'>
                <img srcSet={AvatarImage} alt='Avatar' />
                <div className='creator-card--amount'>
                    {amount}
                </div>
            </div>
            <div className='creator-card-info'>
                <div className="creator-card-info--name">
                    {name}
                </div>
                <div className="creator-card-info--wallet">
                    {wallet + ' '}
                    <span>
                        ETH
                    </span>
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
                    <CardSmall title='ETH never die' price={0.27} amount={12} />
                    <CardSmall title='ETH never die' price={0.27} amount={12} />
                    <CardSmall title='ETH never die' price={0.27} amount={12} />
                </div>
            </div>
            <div className="feed-latest">
                <span className="feed-latest--title">
                    Latest upload from creators 🔥
                </span>
                <div className='feed-latest--list'>
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                    <LatestCreator className='feed-latest--card' name='Payton Harris' wallet='2.456' amount='6' />
                </div>
                <div className='feed-latest--btn'>
                    <Button text='Discover more' buttonWidth='98px' />
                </div>
            </div>
        </section>
    )
}

export default FeedSection