import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as Wallet } from 'assets/icons/wallet.svg';
import { ReactComponent as Check } from 'assets/icons/check.svg';
import QRCodePreview from 'assets/QR.png';
import ConnectQRGenerator from 'views/components/ConnectQRGenerator';

const walletsData = [
  {
    id: 1,
    name: 'Formatic',
    color: 'purple',
    checkColor: '#9757D7',
  },
  {
    id: 2,
    name: 'Coinbase Wallet',
    color: 'blue',
    checkColor: '#3772FF',
  },
  {
    id: 3,
    name: 'MyEtherWallet',
    color: 'green',
    checkColor: '#45B26B',
  },
  {
    id: 4,
    name: 'Wallet Connect',
    color: 'rose',
    checkColor: '#EF466F',
  },
];

function ConnectPage() {
  useEffect(() => {
    document.title = 'Connect Wallet'
  }, [])
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleWalletSelect = (walletId) => {
    if (walletId == selectedWallet) {
      setSelectedWallet(null);
    } else {
      setSelectedWallet(walletId);
    }
  };

  return (
    <div className='connect'>
      <div className='connect--header'>
        <ArrowLeft fill='white' width={24} height={15} />
        <h2 className='font-headline--2'>Connect your wallet</h2>
      </div>
      <div className='connect--divider'></div>
      <div className='connect-content'>
        <div className='connect-wallets'>
          {walletsData.map((wallet) => (
            <div
              key={wallet.id}
              className={`connect-wallets--item ${selectedWallet === wallet.id ? 'selected' : ''}`}
              onClick={() => handleWalletSelect(wallet.id)}
            >
              <div className='wallet-item'>
                <div className={`wallet-item--icon ${selectedWallet === wallet.id ? `${wallet.color}--circle` : wallet.color}`}>
                  {selectedWallet === wallet.id ? (
                    <Check fill={wallet.checkColor} />
                  ) : (
                    <Wallet />
                  )}
                </div>
                <span className='font-body--1-bold'>{wallet.name}</span>
              </div>
              {selectedWallet === wallet.id && <ArrowRight fill='black' />}
            </div>
          ))}
        </div>
        <div className='content-qr--preview'>
          {
            selectedWallet ?
              <ConnectQRGenerator />
              :
              <img srcSet={QRCodePreview} alt='QR Code Preview' />
          }
        </div>
      </div>
    </div>
  );
}

export default ConnectPage;
