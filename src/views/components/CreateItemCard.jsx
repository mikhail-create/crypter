import React from 'react'
import Button from 'views/components/shared/Button'
import SingleItemImage from 'assets/create--single.png'
import MultipleItemImage from 'assets/create--multiple.png'

function CreateItemCard({ isSingle }) {
  return (
    <div className='create-item'>
      {isSingle
        ?
        <>
          <img srcSet={SingleItemImage} alt='Create Single Item' />
          <div className='create-item--button'>
            <Button text='Create Single' path='/upload/single' />
          </div>
        </>
        :
        <>
          <img srcSet={MultipleItemImage} alt='Create Multiple Item' />
          <div className='create-item--button'>
            <Button text='Create Multiple' path='/upload/multiple' isColored={true} />
          </div>
        </>
      }
    </div>
  )
}

export default CreateItemCard