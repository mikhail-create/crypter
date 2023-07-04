import React from 'react'
import CollectionItem from './CollectionItem'

function HotCollectionSection() {
    return (
        <div className='hotsection'>
            <span className='hotsection--title'>
                Hot collections
            </span>
            <div className='hotsection--list'>
                <CollectionItem title='Awesome collection' author='Kennith Olson' itemsAmount={28} />
                <CollectionItem title='Awesome collection' author='Kennith Olson' itemsAmount={28} />
                <CollectionItem title='Awesome collection' author='Kennith Olson' itemsAmount={28} />
            </div>
        </div>
    )
}

export default HotCollectionSection