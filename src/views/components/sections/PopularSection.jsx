/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import SliderCard from '../SliderCard';
import DropDown from 'views/components/shared/DropDown';

function PopularSection() {
  const carouselRef = useRef(null);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    updateItemsToShow()
  }, [])

  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) {
      setItemsToShow(1.5);
    }
  }

  const slides = [
    <SliderCard key={1} rank={1} name='Victor Jesz' wallet={9.999} />,
    <SliderCard key={2} rank={2} name='John Smith' wallet={5.678} />,
    <SliderCard key={3} rank={3} name='Emily Johnson' wallet={9.012} />,
    <SliderCard key={4} rank={4} name='Michael Davis' wallet={3.456} />,
    <SliderCard key={5} rank={5} name='Sarah Thompson' wallet={1.234} />,
    <SliderCard key={6} rank={6} name='David Wilson' wallet={7.890} />,
    <SliderCard key={7} rank={7} name='Jessica Brown' wallet={4.321} />,
    <SliderCard key={8} rank={8} name='Daniel Taylor' wallet={6.789} />
  ]

  const handlePrevSlide = () => {
    carouselRef.current.slidePrev();
  };

  const handleNextSlide = () => {
    carouselRef.current.slideNext();
  };

  return (
    <section className='popular'>
      <div className='popular-header'>
        <div className='popular-header--category'>
          <span className='font-body--1-bold'>
            Popular
          </span>
          <div className='font-headline--3'>
            Sellers
            <ArrowDown className='arrow-down' />
          </div>
        </div>
        <div className="popular-header--select">
          <DropDown items={['Today', 'Week']} />
        </div>
      </div>
      <div className='popular-slider'>
        <button className='popular-slider--control control--left' onClick={handlePrevSlide}>
          <ArrowLeft fill='black' />
        </button>
        <div className='popular-slider--list'>
          <Carousel
            itemsToShow={itemsToShow}
            pagination={false}
            ref={carouselRef}
            showArrows={false}
            itemPadding={[0, 32, 0, 32]}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slider--item ${index === 0 ? 'active' : ''}`}
              >
                {slide}
              </div>
            ))}
          </Carousel>
        </div>
        <button className='popular-slider--control control--right' onClick={handleNextSlide}>
          <ArrowRight fill='black' />
        </button>
      </div>
      <div className='popular-slider--buttons'>
        <button className='popular-slider--control' onClick={handlePrevSlide}>
          <ArrowLeft fill='black' />
        </button>
        <button className='popular-slider--control' onClick={handleNextSlide}>
          <ArrowRight fill='black' />
        </button>
      </div>
    </section>
  )
}

export default PopularSection