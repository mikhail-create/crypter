import React from 'react'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as ArrowExpand } from '../../assets/icons/arrow-expand.svg'
import { ReactComponent as Lightning } from '../../assets/icons/lightning.svg'
import { ReactComponent as Donut } from '../../assets/icons/donut.svg'
import { ReactComponent as Doughnut } from '../../assets/icons/doughnut.svg'
import { ReactComponent as Cup } from '../../assets/icons/cup.svg'
import { ReactComponent as Verified } from '../../assets/icons/verified.svg'
import AvatarImage from '../../assets/avatar.png'

function SliderCard({ rank, name, wallet }) {
    return (
        <div className='slider-card'>
            <div className='slider-card--header'>
                {(() => {
                    switch (rank) {
                        case 1:
                            return <div className='slider-card--rank slider-card--rank1'><Cup />#{rank}</div>;
                        case 2:
                            return <div className='slider-card--rank slider-card--rank2'><Donut />#{rank}</div>;
                        case 3:
                            return <div className='slider-card--rank slider-card--rank3'><Lightning />#{rank}</div>;
                        default:
                            return <div className='slider-card--rank'><Doughnut />#{rank}</div>;
                    }
                })()}
                <div className='slider-card--action'>
                    <PlusIcon />
                    <ArrowExpand />
                </div>
            </div>
            <div className='slider-card--divider'></div>
            <div className='slider-card-user'>
                <div className='slider-card-user--wrapper'>
                    <img srcSet={AvatarImage} alt='Avatar' />
                    <div className='slider-card-user--verified'>
                        <Verified />
                    </div>
                </div>
                <div className='slider-card-user--name'>
                    {name}
                </div>
                <div className='slider-card-user--wallet'>
                    {wallet + ' '}
                    <span>
                        ETH
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SliderCard