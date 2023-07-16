import React, { useEffect, useState } from 'react'
import CollectionItem from '../CollectionItem'
import { getAllProducts } from '_services/api';

function HotCollectionSection() {
  const [nftList, setNftList] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(3);

  const updateItemsToLoad = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) {
      setItemsToShow(1);
    }
  }

  useEffect(() => {
    updateItemsToLoad()
    loadNfts();
  }, []);

  const loadNfts = () => {
    getAllProducts({ page: 3, limit: itemsToShow })
      .then(data => {
        setNftList(data.results);
      })
      .catch(error => {
        console.error('Failed to fetch NFTs:', error);
      });
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 17) + 10;
  }

  return (
    <div className='hotsection'>
      <h3 className='hotsection--title font-headline--3'>
        Hot collections
      </h3>
      <div className='hotsection--list'>
        {nftList.slice(0, itemsToShow).map((nft, index) => (
          <CollectionItem
            key={index}
            images={[
              `https://crypter-backend.vercel.app/images/img-1${generateRandomNumber()}.webp`,
              `https://crypter-backend.vercel.app/images/img-1${generateRandomNumber()}.webp`,
              `https://crypter-backend.vercel.app/images/img-1${generateRandomNumber()}.webp`,
              `https://crypter-backend.vercel.app/images/img-1${generateRandomNumber()}.webp`,
            ]}
            title={nft.name}
            author={nft.owner}
            itemsAmount={nft.stockAmount}
          />
        ))}
      </div>
    </div>
  );
}

export default HotCollectionSection;
