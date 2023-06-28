import React from 'react'
import ContentSection from '../components/sections/ContentSection'
import AuctionSection from '../components/sections/AuctionSection'
import FeedSection from '../components/sections/FeedSection'

function HomePage() {
  return (
    <div className='home'>
        <ContentSection />
        <AuctionSection />
        <FeedSection />
    </div>
  )
}

export default HomePage