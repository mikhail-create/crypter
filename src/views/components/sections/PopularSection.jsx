import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'
import SliderCard from '../SliderCard'

function PopularSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 5 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 5 ? 0 : prevIndex + 1));
    };

    const visibleSlides = slides.slice(currentIndex, currentIndex + 5);

    return (
        <section className='popular'>
            <div className='popular-header'>
                <div className='popular-header--category'>
                    <span>
                        Popular
                    </span>
                    <div>
                        Sellers
                        <ArrowDown className='arrow-down' />
                    </div>
                </div>
                <div className="popular-header-select">
                    <select>
                        <option value="">Today</option>
                        <option value="">Week</option>
                        <option value="">Month</option>
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
                <div id='slider-list' className='popular-slider--list'>
                    {visibleSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slider--item ${index === 0 ? 'active' : ''}`}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
                <button className='popular-slider--control' onClick={handleNextSlide}>
                    <ArrowRight />
                </button>
            </div>
        </section>
    )
}

export default PopularSection