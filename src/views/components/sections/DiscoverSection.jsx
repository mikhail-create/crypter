import React, { useState } from 'react';
import CardMedium from 'views/components/CardMedium';
import Button from 'views/components/shared/Button';
import DropDown from 'views/components/shared/DropDown';
import NavItem from 'views/components/shared/NavItem';

function DiscoverSection() {
    const [category, setCategory] = useState('All items');

    const handleCategoryChange = (newCategory) => {
        if (category === 'All items' && newCategory === 'All items') { }
        else if (category === newCategory) { setCategory('All items') }
        else { setCategory(newCategory) }
    };

    return (
        <section className="discover">
            <h3 className="discover--title font-headline--3">Discover</h3>
            <div className="discover-category">
                <div className="discover-category--filter">
                    <DropDown items={['Recently added', 'Total bids', 'Recently added', 'Total bids']} />
                </div>
                <nav className="discover-category--navigation">
                    <NavItem handleCategoryChange={handleCategoryChange} name="All items" isSelected={category === 'All items'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Art" isSelected={category === 'Art'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Game" isSelected={category === 'Game'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Photography" isSelected={category === 'Photography'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Music" isSelected={category === 'Music'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Video" isSelected={category === 'Video'} />
                </nav>
                <Button text='Filter' isColored={true} buttonWidth={116} />
            </div>
            <div className="discover--divider"></div>
            <div className="discover-filters"></div>
            <div className="discover-list"></div>
        </section>
    );
}

export default DiscoverSection;
