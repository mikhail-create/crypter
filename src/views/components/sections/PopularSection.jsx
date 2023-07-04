import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'
import SliderCard from '../SliderCard'

function PopularSection() {
    const carouselRef = useRef(null);

    const slides = [
        <SliderCard rank={1} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={2} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={3} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={4} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={5} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={6} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={7} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={8} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={9} name='Edd Harris' wallet={2.456} />,
        <SliderCard rank={10} name='Edd Harris' wallet={2.456} />,
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
                <div className="popular-header-select">
                    <select className='font-caption--1-bold'>
                        <option value="today">Today</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                    <div className='popular-header-select--arrow'>
                        <ArrowDown />
                    </div>
                </div>
            </div>
            <div className='popular-slider'>
                <button className='popular-slider--control' onClick={handlePrevSlide}>
                    <ArrowLeft />
                </button>
                <div className='popular-slider--list'>
                    <Carousel
                        itemsToShow={5}
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
                <button className='popular-slider--control' onClick={handleNextSlide}>
                    <ArrowRight />
                </button>
            </div>
        </section>
    )
}

export default PopularSection