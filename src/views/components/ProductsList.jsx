import { getAllProducts } from '_services/api';
import React, { useState, useEffect } from 'react';
import CardMedium from 'views/components/CardMedium';
import Button from 'views/components/shared/Button';
import { ReactComponent as Loading } from 'assets/icons/loading.svg';

const ProductsList = ({ filters }) => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (currentPage !== 1) {
      loadData();
    }
  }, [currentPage]);

  const loadData = () => {
    setIsLoading(true);
    getAllProducts({ page: currentPage, limit: 8 })
      .then(data => {
        console.log(data);
        setDataList(prevDataList => [...prevDataList, ...data.results]);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error', error);
        setIsLoading(false);
      });
  };

  const loadMoreItems = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const filteredItems = () => {
    return dataList.filter((item) => {
      if (filters.category === '') {
        return true; // Отображать все элементы, если категория не выбрана
      }
      return item.category === filters.category;
    });
  };

  return (
    <div className="discover-list">
      {filters.category != 'All items' ?
        filteredItems().map((item, index) => (
          <CardMedium
            key={item.name + index}
            id={item.id}
            title={item.name}
            instaPrice={item.price}
            stockAmount={item.stockAmount}
            bid={item.highestBid}
            isNewBids={item.newBid}
            imgSrc={'https://crypter-backend.vercel.app/images/' + item.src}
          />
        ))
        :
        dataList.map((item, index) => (
          <CardMedium
            key={item.name + index}
            id={item.id}
            title={item.name}
            instaPrice={item.price}
            stockAmount={item.stockAmount}
            bid={item.highestBid}
            isNewBids={item.newBid}
            imgSrc={'https://crypter-backend.vercel.app/images/' + item.src}
          />
        ))}
      {currentPage < totalPages && (
        <div onClick={loadMoreItems} className="discover-list--button">
          {!isLoading ? (
            <Button text='Load more' />
          ) : (
            <Button text='Loading' icon={<Loading fill='black' />} />
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
