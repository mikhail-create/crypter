import React from 'react'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg'
import SliderCard from '../SliderCard'

function PopularSection() {
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
                <SliderCard rank={1} name='Edd Harris' wallet={2.456}/>
                <SliderCard rank={2} name='Edd Harris' wallet={2.456}/>
                <SliderCard rank={3} name='Edd Harris' wallet={2.456}/>
                <SliderCard rank={4} name='Edd Harris' wallet={2.456}/>
                <SliderCard rank={5} name='Edd Harris' wallet={2.456}/>
            </div>
        </section>
    )
}

export default PopularSection