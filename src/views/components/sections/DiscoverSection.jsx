import React from 'react'
import CardMedium from 'views/components/CardMedium'
import DropDown from 'views/components/shared/DropDown'

function DiscoverSection() {
  return (
    <section className='discover'>
        <h3 className='discover--title font-headline--3'>
            Discover
        </h3>
        <div className='discover-category'>
            <DropDown />
        </div>
        <div className='discover--divider'></div>
        <div className='discover-filters'>
        
        </div>
        <div className='discover-list'>
            <CardMedium title='Amazing digital art' instaPrice={2.45} stockAmount={3} bid={0.01} isNewBids={true} />
            <CardMedium title='Amazing digital art' instaPrice={2.45} stockAmount={3} bid={0.01} isNewBids={true} />
            <CardMedium title='Amazing digital art' instaPrice={2.45} stockAmount={3} bid={0.01} isNewBids={true} />
            <CardMedium title='Amazing digital art' instaPrice={2.45} stockAmount={3} bid={0.01} isNewBids={true} />
            <CardMedium title='Amazing digital art' instaPrice={2.45} stockAmount={3} bid={0.01} isNewBids={true} />
            <CardMedium title='Amazing digital art' instaPrice={2.45} stockAmount={3} bid={0.01} isNewBids={true} />
        </div>
    </section>
  )
}

export default DiscoverSection