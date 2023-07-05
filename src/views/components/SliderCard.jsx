import React from 'react';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as ArrowExpand } from 'assets/icons/arrow-expand.svg';
import { ReactComponent as Lightning } from 'assets/icons/lightning.svg';
import { ReactComponent as Donut } from 'assets/icons/donut.svg';
import { ReactComponent as Doughnut } from 'assets/icons/doughnut.svg';
import { ReactComponent as Cup } from 'assets/icons/cup.svg';
import { ReactComponent as Verified } from 'assets/icons/verified.svg';
import AvatarImage from 'assets/avatar.png';

function SliderCard({ rank, name, wallet }) {
    return (
        <div className='slider-card'>
            <div className='slider-card--header'>
                {(() => {
                    switch (rank) {
                        case 1:
                            return <div className='slider-card--rank slider-card--rank1 font-caption--2-bold'><Cup />#{rank}</div>;
                        case 2:
                            return <div className='slider-card--rank slider-card--rank2 font-caption--2-bold'><Donut />#{rank}</div>;
                        case 3:
                            return <div className='slider-card--rank slider-card--rank3 font-caption--2-bold'><Lightning />#{rank}</div>;
                        default:
                            return <div className='slider-card--rank font-caption--2-bold'><Doughnut />#{rank}</div>;
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
                <div className='slider-card-user--name font-caption--1-bold'>
                    {name}
                </div>
                <div className='slider-card-user--wallet font-caption--2-bold'>
                    {wallet}
                </div>
            </div>
        </div>
    )
}

export default SliderCard