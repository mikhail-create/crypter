import React from 'react'
import PreviewImage from 'assets/image1.png'
import AvatarImage from 'assets/avatar.png'
import ETHImage from 'assets/ETH.png'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import Button from 'views/components/shared/Button';


function AuctionSection() {
    return (
        <section className='auction'>
            <div className='auction-preview'>
                <img className='auction-preview--img' srcSet={PreviewImage} alt='Preview Image' />
            </div>
            <div className='auction-info'>
                <div className='auction-info--author'>
                    <h1 className='auction--title font-headline font-headline--1'>
                        the creator network®
                    </h1>
                    <div className='auction-data'>
                        <div className='auction-data--block'>
                            <img srcSet={AvatarImage} />
                            <div className='auction-data--block--info'>
                                <span className='subtitle font-caption--2'>
                                    Creator
                                </span>
                                <span className='title font-caption--1-bold'>
                                    Enrico Cole
                                </span>
                            </div>
                        </div>
                        <div className='auction-data--block'>
                            <img srcSet={ETHImage} />
                            <div className='auction-data--block--info'>
                                <span className='subtitle font-caption--2'>
                                    Instant price
                                </span>
                                <span className='title font-caption--1-bold'>
                                    3.5 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auction-info--bid">
                    <div className="bid-price">
                        <span className='bid-price--title font-body--2-bold'>
                            Current Bid
                        </span>
                        <span className='bid-price--amount font-headline--2'>
                            1.00 ETH
                        </span>
                        <span className='bid-price--currency font-body--1-bold'>
                            $3,618.36
                        </span>
                    </div>
                    <div className="bid-time">
                        <div className="bid-time--title font-body--2-bold">
                            Auction ending in
                        </div>
                        <div className="bid-time-ending">
                            <span className='bid-time-ending--now font-headline--4'>
                                19
                            </span>
                            <span className='bid-time-ending--now font-headline--4'>
                                24
                            </span>
                            <span className='bid-time-ending--now font-headline--4'>
                                19
                            </span>
                            <span className="bid-time-ending--subtitle font-body--2-bold">
                                Hrs
                            </span>
                            <span className="bid-time-ending--subtitle font-body--2-bold">
                                mins
                            </span>
                            <span className="bid-time-ending--subtitle font-body--2-bold">
                                secs
                            </span>
                        </div>
                    </div>
                </div>
                <div className="auction-info--buttons">
                    <Button text="Place a bid" isColored={true} isBiggerFont={false} buttonWidth='100%' buttonHeight='48px' />
                    <Button text="View item" isColored={false} isBiggerFont={false} buttonWidth='100%' buttonHeight='48px' />
                </div>
                <div className="auction-info-actions">
                    <div className="auction-info-actions--arrow">
                        <ArrowLeft />
                    </div>
                    <div className="auction-info-actions--arrow">
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuctionSection