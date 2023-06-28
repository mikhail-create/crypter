import React from 'react'
import ContentSection from '../components/sections/ContentSection'
import AuctionSection from '../components/sections/AuctionSection'

function HomePage() {
  return (
    <div className='home'>
        <ContentSection />
        <AuctionSection />
    </div>
  )
}

export default HomePage