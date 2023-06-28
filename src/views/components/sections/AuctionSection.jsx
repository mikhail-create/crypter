import React from 'react'
import PreviewImage from '../../../assets/image1.png'
import AvatarImage from '../../../assets/avatar.png'
import ETHImage from '../../../assets/ETH.png'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg'
import Button from '../Button'


function AuctionSection() {
    return (
        <section className='auction'>
            <div className='auction-preview'>
                <img className='auction-preview--img' srcSet={PreviewImage} alt='Preview Image' />
            </div>
            <div className='auction-info'>
                <div className='auction-info--author'>
                    <div className='auction--title'>
                        Marco carrillo®
                    </div>
                    <div className='auction-data'>
                        <div className='auction-data--block'>
                            <img srcSet={AvatarImage} />
                            <div className='auction-data--block--info'>
                                <span className='subtitle'>
                                    Creator
                                </span>
                                <span className='title'>
                                    Enrico Cole
                                </span>
                            </div>
                        </div>
                        <div className='auction-data--block'>
                            <img srcSet={ETHImage} />
                            <div className='auction-data--block--info'>
                                <span className='subtitle'>
                                    Instant price
                                </span>
                                <span className='title'>
                                    3.5 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auction-info--bid">
                    <div className="bid-price">
                        <span className='bid-price--title'>
                            Current Bid
                        </span>
                        <span className='bid-price--amount'>
                            1.00 ETH
                        </span>
                        <span className='bid-price--currency'>
                            $3,618.36
                        </span>
                    </div>
                    <div className="bid-time">
                        <div className="bid-time--title">
                            Auction ending in
                        </div>
                        <div className="bid-time-ending">
                            <span className='bid-time-ending--now'>
                                19
                            </span>
                            <span className='bid-time-ending--now'>
                                24
                            </span>
                            <span className='bid-time-ending--now'>
                                19
                            </span>
                            <span className="bid-time-ending--subtitle">
                                Hrs
                            </span>
                            <span className="bid-time-ending--subtitle">
                                mins
                            </span>
                            <span className="bid-time-ending--subtitle">
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