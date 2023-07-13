import React, { useRef } from 'react'
import Carousel from 'react-elastic-carousel'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import CardMedium from '../CardMedium'
import NFTList from '_helpers/NFTList'

function HotBidSection() {
  const carouselRef = useRef(null);

  const handlePrevSlide = () => {
    carouselRef.current.slidePrev();
  };

  const handleNextSlide = () => {
    carouselRef.current.slideNext();
  };

  return (
    <div className='hotbid'>
      <div className='hotbid-header'>
        <h3 className='hotbid-header--title font-headline--3'>
                    Hot bid
        </h3>
        <div className='hotbid-header--control'>
          <button className='hotbid-header--arrow' onClick={handlePrevSlide}>
            <ArrowLeft />
          </button>
          <button className='hotbid-header--arrow' onClick={handleNextSlide}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className='hotbid--list'>
        <Carousel
          itemsToShow={4}
          pagination={false}
          ref={carouselRef}
          showArrows={false}
          itemPadding={[0]}
        >
          <CardMedium
            key={NFTList[5].name}
            title={NFTList[5].name}
            instaPrice={NFTList[5].price}
            stockAmount={NFTList[5].stockAmount}
            bid={NFTList[5].highestBid}
            isNewBids={NFTList[5].newBid}
            imgSrc={NFTList[5].src}
          />
          <CardMedium
            key={NFTList[6].name}
            title={NFTList[6].name}
            instaPrice={NFTList[6].price}
            stockAmount={NFTList[6].stockAmount}
            bid={NFTList[6].highestBid}
            isNewBids={NFTList[6].newBid}
            imgSrc={NFTList[6].src}
          />
          <CardMedium
            key={NFTList[7].name}
            title={NFTList[7].name}
            instaPrice={NFTList[7].price}
            stockAmount={NFTList[7].stockAmount}
            bid={NFTList[7].highestBid}
            isNewBids={NFTList[7].newBid}
            imgSrc={NFTList[7].src}
          />
          <CardMedium
            key={NFTList[8].name + 0}
            title={NFTList[8].name}
            instaPrice={NFTList[8].price}
            stockAmount={NFTList[8].stockAmount}
            bid={NFTList[8].highestBid}
            isNewBids={NFTList[8].newBid}
            imgSrc={NFTList[8].src}
          />
          <CardMedium
            key={NFTList[8].name + 1}
            title={NFTList[8].name}
            instaPrice={NFTList[8].price}
            stockAmount={NFTList[8].stockAmount}
            bid={NFTList[8].highestBid}
            isNewBids={NFTList[8].newBid}
            imgSrc={NFTList[8].src}
          />
          <CardMedium
            key={NFTList[8].name + 2}
            title={NFTList[8].name}
            instaPrice={NFTList[8].price}
            stockAmount={NFTList[8].stockAmount}
            bid={NFTList[8].highestBid}
            isNewBids={NFTList[8].newBid}
            imgSrc={NFTList[8].src}
          />
        </Carousel>
      </div>
    </div>
  )
}

export default HotBidSection