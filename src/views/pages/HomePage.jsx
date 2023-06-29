import React from 'react'
import ContentSection from '../components/sections/ContentSection'
import AuctionSection from '../components/sections/AuctionSection'
import FeedSection from '../components/sections/FeedSection'
import PopularSection from '../components/sections/PopularSection'

function HomePage() {
  return (
    <div className='home'>
        <ContentSection />
        <AuctionSection />
        <FeedSection />
        <PopularSection />
    </div>
  )
}

export default HomePage