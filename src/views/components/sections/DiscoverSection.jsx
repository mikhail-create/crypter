import React, { useState } from 'react';
import Button from 'views/components/shared/Button';
import DropDown from 'views/components/shared/DropDown';
import NavItem from 'views/components/shared/NavItem';
import RangeBar from 'views/components/shared/RangeBar';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import ProductsList from 'views/components/ProductsList';

function DiscoverSection() {
  const [sliderValue, setSliderValue] = useState(5);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All items',
    price: '',
    likes: '',
    creator: '',
    priceRange: [0, 100]
  });

  const handleCategoryChange = (newCategory) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      category: newCategory === prevFilters.category ? 'All items' : newCategory
    }));
  };

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <section className="discover">
      <h3 className="discover--title font-headline--3">Discover</h3>
      <div className="discover-category">
        <div className="discover-category--filter">
          <DropDown items={['Recently added', 'Total bids', 'Recently added', 'Total bids']} />
        </div>
        <nav className="discover-category--navigation">
          <NavItem handleCategoryChange={handleCategoryChange} name="All items" isSelected={selectedFilters.category === 'All items'} />
          <NavItem handleCategoryChange={handleCategoryChange} name="Art" isSelected={selectedFilters.category === 'Art'} />
          <NavItem handleCategoryChange={handleCategoryChange} name="Game" isSelected={selectedFilters.category === 'Game'} />
          <NavItem handleCategoryChange={handleCategoryChange} name="Photography" isSelected={selectedFilters.category === 'Photography'} />
          <NavItem handleCategoryChange={handleCategoryChange} name="Music" isSelected={selectedFilters.category === 'Music'} />
          <NavItem handleCategoryChange={handleCategoryChange} name="Video" isSelected={selectedFilters.category === 'Video'} />
        </nav>
        <Button text='Filter' isColored={true} icon={<Close />} />
      </div>
      <div className="discover--divider"></div>
      <div className="discover-filters">
        <DropDown label='price' items={['Highest price', 'Lowest price', 'Popular', 'Newest']} />
        <DropDown label='likes' items={['Most liked', 'Least liked']} />
        <DropDown label='creator' items={['Verified only', 'All creators', 'Newest creators']} />
        <div className="discover-filters--price">
          <label className='font-hairline--2'>
            Price range
          </label>
          <RangeBar min={0} max={100} value={sliderValue} onChange={handleSliderChange} />
        </div>
      </div>
      <ProductsList filters={selectedFilters} />
    </section >
  );
}

export default DiscoverSection;
