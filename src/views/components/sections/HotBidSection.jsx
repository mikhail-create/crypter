import React, { useRef, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import CardMedium from '../CardMedium';
import { getAllProducts } from '_services/api';

function HotBidSection() {
  const carouselRef = useRef(null);
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    loadNfts();
  }, []);

  const loadNfts = () => {
    getAllProducts({ page: 2, limit: 6 })
      .then(data => {
        setNftList(data.results);
      })
      .catch(error => {
        console.error('Failed to fetch NFTs:', error);
      });
  };

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
            <ArrowLeft fill='black' />
          </button>
          <button className='hotbid-header--arrow' onClick={handleNextSlide}>
            <ArrowRight fill='black' />
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
          {nftList.map((nft, index) => (
            <CardMedium
              key={index}
              id={nft.id}
              title={nft.name}
              instaPrice={nft.price}
              stockAmount={nft.stockAmount}
              bid={nft.highestBid}
              isNewBids={nft.newBid}
              imgSrc={'https://crypter-backend.vercel.app/images/' + nft.src}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HotBidSection;
