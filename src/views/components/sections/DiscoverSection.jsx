import React, { useEffect, useState } from 'react';
import CardMedium from 'views/components/CardMedium';
import Button from 'views/components/shared/Button';
import DropDown from 'views/components/shared/DropDown';
import NavItem from 'views/components/shared/NavItem';
import RangeBar from 'views/components/shared/RangeBar';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Loading } from 'assets/icons/loading.svg';
import NFTList from '_helpers/NFTList';

function DiscoverSection() {
    // Массив тестовых карточек для заполнения
    const testItems = [
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
        <CardMedium
            title='Amazing digital art'
            instaPrice={2.45}
            stockAmount={3}
            bid={0.001}
            isNewBids={true}
        />,
    ]
    const [displayedItems, setDisplayedItems] = useState([]);
    const [lastLoadedIndex, setLastLoadedIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Загрузка первых 8 карточек
        const itemsPerPage = 8;
        const nextItems = NFTList.slice(lastLoadedIndex, lastLoadedIndex + itemsPerPage);
        setDisplayedItems(nextItems);
        setLastLoadedIndex(lastLoadedIndex + itemsPerPage);
    }, []);

    const loadMoreItems = () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            const itemsPerPage = 8;
            const nextItems = NFTList.slice(lastLoadedIndex, lastLoadedIndex + itemsPerPage);
            setDisplayedItems(prevItems => [...prevItems, ...nextItems]);
            setLastLoadedIndex(prevIndex => prevIndex + itemsPerPage);
            setIsLoading(false);
        }, 500); // Задержка в 0.5 секунды
    };


    const [sliderValue, setSliderValue] = useState(5);
    const [category, setCategory] = useState('All items');

    const handleCategoryChange = (newCategory) => {
        if (category === 'All items' && newCategory === 'All items') { }
        else if (category === newCategory) { setCategory('All items') }
        else { setCategory(newCategory) }
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
                    <NavItem handleCategoryChange={handleCategoryChange} name="All items" isSelected={category === 'All items'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Art" isSelected={category === 'Art'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Game" isSelected={category === 'Game'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Photography" isSelected={category === 'Photography'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Music" isSelected={category === 'Music'} />
                    <NavItem handleCategoryChange={handleCategoryChange} name="Video" isSelected={category === 'Video'} />
                </nav>
                <Button text='Filter' isColored={true} icon={<Close />} />
            </div>
            <div className="discover--divider"></div>
            <div className="discover-filters">
                <label className='font-hairline--2'>
                    Price
                </label>
                <label className='font-hairline--2'>
                    Likes
                </label>
                <label className='font-hairline--2'>
                    Creator
                </label>
                <label className='font-hairline--2'>
                    Price range
                </label>
                <DropDown items={['Highest price', 'Lowest price', 'Popular', 'Newest']} />
                <DropDown items={['Most liked', 'Least liked']} />
                <DropDown items={['Verified only', 'All creators', 'Newest creators']} />
                <RangeBar min={0} max={100} value={sliderValue} onChange={handleSliderChange} />
            </div>
            <div className="discover-list">
                {displayedItems.map((item, index) => (
                    <CardMedium
                        key={item.name}
                        title={item.name}
                        instaPrice={item.price}
                        stockAmount={item.stockAmount}
                        bid={item.highestBid}
                        isNewBids={item.newBid}
                        imgSrc={item.src}
                    />
                ))}
                <div onClick={loadMoreItems} className="discover-list--button">
                    {
                        !isLoading ? <Button text='Load more' /> : <Button text='Loading' icon={<Loading />} />
                    }
                </div>
            </div>

        </section >
    );
}

export default DiscoverSection;
