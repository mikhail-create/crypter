import React from 'react'
import CardBig from '../CardBig'
import CardSmall from '../CardSmall'

function FeedSection() {
    return (
        <section className='feed'>
            <CardBig />
            <div className='feed--list'>
                <CardSmall title='ETH never die' price={0.27} amount={12} />
                <CardSmall title='ETH never die' price={0.27} amount={12} />
                <CardSmall title='ETH never die' price={0.27} amount={12} />
            </div>
        </section>
    )
}

export default FeedSection