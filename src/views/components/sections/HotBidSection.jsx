import React, { useRef } from 'react'
import Carousel from 'react-elastic-carousel'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'
import CardMedium from '../CardMedium'

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
                        title='Amazing digital art'
                        instaPrice={2.45}
                        stockAmount={3}
                        bid={0.001}
                        isNewBids={true}
                    />
                    <CardMedium
                        title='Amazing digital art'
                        instaPrice={2.45}
                        stockAmount={3}
                        bid={0.001}
                        isNewBids={true}
                    />
                    <CardMedium
                        title='Amazing digital art'
                        instaPrice={2.45}
                        stockAmount={3}
                        bid={0.001}
                        isNewBids={true}
                    />
                    <CardMedium
                        title='Amazing digital art'
                        instaPrice={2.45}
                        stockAmount={3}
                        bid={0.001}
                        isNewBids={true}
                    />
                    <CardMedium
                        title='Amazing digital art'
                        instaPrice={2.45}
                        stockAmount={3}
                        bid={0.001}
                        isNewBids={true}
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default HotBidSection