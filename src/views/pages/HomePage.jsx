import React from 'react'
import ContentSection from 'views/components/sections/ContentSection'
import AuctionSection from 'views/components/sections/AuctionSection'
import FeedSection from 'views/components/sections/FeedSection'
import PopularSection from 'views/components/sections/PopularSection'
import HotBidSection from 'views/components/sections/HotBidSection'
import HotCollectionSection from 'views/components/sections/HotCollectionSection'
import DiscoverSection from 'views/components/sections/DiscoverSection'

function HomePage() {
  return (
    <div className='home'>
        <ContentSection />
        <AuctionSection />
        <FeedSection />
        <PopularSection />
        <HotBidSection />
        <HotCollectionSection />
        <DiscoverSection />
    </div>
  )
}

export default HomePage