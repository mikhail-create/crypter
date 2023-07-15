import React, { useState, useEffect } from 'react';
import CardBig from 'views/components/CardBig';
import CardSmall from 'views/components/CardSmall';
import AvatarImage from 'assets/avatar.png';
import Button from 'views/components/shared/Button';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { getAllProducts } from '_services/api';

const LatestCreator = ({ name, wallet, amount }) => {
  return (
    <div className='creator-card'>
      <div className='creator-card--profile'>
        <img srcSet={AvatarImage} alt='Avatar' />
        <div className='creator-card--amount font-caption--2-bold'>
          {amount}
        </div>
      </div>
      <div className='creator-card-info'>
        <div className="creator-card-info--name font-caption--1-bold">
          {name}
        </div>
        <div className="creator-card-info--wallet font-caption--2-bold">
          {wallet}
        </div>
      </div>
    </div>
  );
};

function FeedSection() {
  const [latestNFTs, setLatestNFTs] = useState([]);

  useEffect(() => {
    loadLatestNFTs();
  }, []);

  const loadLatestNFTs = () => {
    getAllProducts({ page: 1, limit: 3 })
      .then(data => {
        setLatestNFTs(data.results);
      })
      .catch(error => {
        console.error('Failed to fetch latest NFTs:', error);
      });
  };

  return (
    <section className='feed'>
      <div className='feed--wrapper'>
        <CardBig />
        <div className='feed--list'>
          {latestNFTs.map((nft, index) => (
            <CardSmall
              key={index}
              title={nft.name}
              price={nft.price}
              amount={nft.stockAmount}
              imgSrc={'https://crypter-backend.vercel.app/images/' + nft.src}
            />
          ))}
        </div>
      </div>
      <div className="feed-latest">
        <span className="feed-latest--title font-caption--2-bold">
          Latest upload from creators 🔥
        </span>
        <div className='feed-latest--list'>
          <LatestCreator
            name='Payton Harris'
            wallet='2.456'
            amount='1'
          />
          <LatestCreator
            name='Mike Joves'
            wallet='21.56'
            amount='2'
          />
          <LatestCreator
            name='Elisabeth Eol'
            wallet='0.156'
            amount='5'
          />
          <LatestCreator
            name='Eula Ember'
            wallet='9.556'
            amount='6'
          />
        </div>
        <div className='feed-latest--btn'>
          <Button text='Discover more' icon={<ArrowRight />} />
        </div>
      </div>
    </section>
  );
}

export default FeedSection;