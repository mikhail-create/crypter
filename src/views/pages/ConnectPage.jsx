import React from 'react'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import { ReactComponent as Wallet } from 'assets/icons/wallet.svg'

function ConnectPage() {
    return (
        <div className='connect'>
            <div className='connect--header'>
                <ArrowLeft fill="white" width={24} height={15} />
                <h2 className='font-headline--2'>
                    Connect your wallet
                </h2>
            </div>
            <div className='connect--divider'>

            </div>
            <div className='connect-content'>
                <div className='connect-wallets'>
                    <div className='connect-wallets--item'>
                        <div className='item'>
                            <div className='item--icon purple'>
                                <Wallet />
                            </div>
                            <span className='font-body--1-bold'>
                                Formatic
                            </span>
                        </div>
                        <ArrowRight fill='black' />
                    </div>
                    <div className='connect-wallets--item'>
                        <div className='item'>
                            <div className='item--icon blue'>
                                <Wallet />
                            </div>
                            <span className='font-body--1-bold'>
                                Coinbase Wallet
                            </span>
                        </div>
                        <ArrowRight fill='black' />
                    </div>
                    <div className='connect-wallets--item'>
                        <div className='item'>
                            <div className='item--icon green'>
                                <Wallet />
                            </div>
                            <span className='font-body--1-bold'>
                                MyEtherWallet
                            </span>
                        </div>
                        <ArrowRight fill='black' />
                    </div>
                    <div className='connect-wallets--item'>
                        <div className='item'>
                            <div className='item--icon rose'>
                                <Wallet />
                            </div>
                            <span className='font-body--1-bold'>
                                Wallet Connect
                            </span>
                        </div>
                        <ArrowRight fill='black' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectPage