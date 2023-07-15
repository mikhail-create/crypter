import React, { useState, useEffect } from 'react';
import NFT from 'assets/NFT.webp';
import Avatar from 'assets/avatar.png';
import Avatar1 from 'assets/avatar-01.png';
import Avatar2 from 'assets/avatar-02.png';
import CustomLabel from 'views/components/shared/CustomLabel';
import NavItem from 'views/components/shared/NavItem';
import Button from 'views/components/shared/Button';
import { getProductById } from '_services/api';
import { useParams } from 'react-router-dom';

function ItemPage() {
  const [category, setCategory] = useState('Info');
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const handleFilterChange = (newFilter) => {
    setCategory((prevCategory) =>
      prevCategory === newFilter ? 'Info' : newFilter
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getProductById(id)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Failed to fetch product:', error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='item'>
      <div className='item--preview'>
        <img srcSet={product.src ? 'https://crypter-backend.vercel.app/images/' + product.src : NFT} alt={product.name + ' NFT Image'} />
      </div>
      <div className='item-info'>
        <div className='item-info--stats'>
          <h3 className='font-headline--3'>{product.name}</h3>
          <div className='row'>
            <CustomLabel text={product.instaPrice + ' ETH'} isPopularGhost={true} />
            <span className='font-button--1'>{product.price}</span>
            <span className='font-button--1'>{product.stockAmount} in stock</span>
          </div>
        </div>
        <div className='item-info--description'>
          <p className='font-body--2'>{product.description}</p>
        </div>
        <div className='item-info--filter'>
          <nav>
            {['Info', 'Owners', 'History', 'Bids'].map((item) => (
              <NavItem
                key={item}
                handleCategoryChange={handleFilterChange}
                name={item}
                isSelected={category === item}
              />
            ))}
          </nav>
        </div>
        <div className='item-info--data'>
          <div className='data--item'>
            <img srcSet={Avatar} alt='Owner Image' />
            <div>
              <span className='font-caption--1'>Owner</span>
              <span className='font-caption--1-bold'>{product.owner}</span>
            </div>
          </div>
          <div className='data--item'>
            <img srcSet={Avatar1} alt='Owner Image' />
            <div>
              <span className='font-caption--1'>Creator</span>
              <span className='font-caption--1-bold'>{product.creator}</span>
            </div>
          </div>
        </div>
        <div className='item-actions'>
          <div className='item-actions--bid'>
            <img srcSet={Avatar2} alt='User Avatar' />
            <div className='bid-info'>
              <div className='bid-info--row'>
                <span className='font-body--2-bold color--gray'>Highest bid by</span>
                <span className='font-body--2-bold'>{product.highestBidBy}</span>
              </div>
              <div className='bid-info--row'>
                <span className='font-body--1-bold'>{product.highestBid} ETH</span>
                <span className='font-body--1-bold color--gray'>{product.highestBidPrice}</span>
              </div>
            </div>
          </div>
          <div className='item-actions--buttons'>
            <Button size='Medium' isColored={true} text='Purchase now' />
            <Button size='Medium' text='Place a bid' />
          </div>
          <div className='item-actions--fee'>
            <span className='font-caption--1-bold'>Service fee</span>
            <span className='font-caption--1-bold color--black'>{product.serviceFee}</span>
            <span className='font-caption--1-bold'>{product.serviceFeeEth}</span>
            <span className='font-caption--1-bold'>{product.serviceFeePrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
