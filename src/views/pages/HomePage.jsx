import React from 'react'
import ContentSection from '../components/sections/ContentSection'
import AuctionSection from '../components/sections/AuctionSection'
import FeedSection from '../components/sections/FeedSection'
import PopularSection from '../components/sections/PopularSection'
import HotBidSection from '../components/sections/HotBidSection'
import HotCollectionSection from '../components/sections/HotCollectionSection'

function HomePage() {
  return (
    <div className='home'>
        <ContentSection />
        <AuctionSection />
        <FeedSection />
        <PopularSection />
        <HotBidSection />
        <HotCollectionSection />
    </div>
  )
}

export default HomePage