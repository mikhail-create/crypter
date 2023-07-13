import React from 'react'
import CollectionItem from '../CollectionItem'

function HotCollectionSection() {
  return (
    <div className='hotsection'>
      <h3 className='hotsection--title font-headline--3'>
                Hot collections
      </h3>
      <div className='hotsection--list'>
        <CollectionItem title='Awesome collection' author='Kennith Olson' itemsAmount={28} />
        <CollectionItem title='Awesome collection' author='Kennith Olson' itemsAmount={28} />
        <CollectionItem title='Awesome collection' author='Kennith Olson' itemsAmount={28} />
      </div>
    </div>
  )
}

export default HotCollectionSection