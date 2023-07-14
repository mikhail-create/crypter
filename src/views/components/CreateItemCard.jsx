import React from 'react'
import Button from 'views/components/shared/Button'
import SingleItemImage from 'assets/create-single.png'
import SingleItemImageMini from 'assets/create-single--mini.png'
import MultipleItemImage from 'assets/create-multiple.png'
import MultipleItemImageMini from 'assets/create-multiple--mini.png'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom'

function CreateItemCard({ isSingle }) {
  return (
    <div className='create-item'>
      {isSingle
        ?
        <>
          <img srcSet={SingleItemImageMini} alt='Create Single Item' />
          <img srcSet={SingleItemImage} alt='Create Single Item' />
          <Link to={'/upload/single'} htmlFor='createButton' className='font-body--2-bold create-item--link'>
            Create Single
          </Link>
          <button id='createButton'>
            <ArrowRight fill='#777E90' />
          </button>
          <div className='create-item--button'>
            <Button text='Create Single' path='/upload/single' />
          </div>
        </>
        :
        <>
          <img srcSet={MultipleItemImageMini} alt='Create Multiple Item' />
          <img srcSet={MultipleItemImage} alt='Create Multiple Item' />
          <Link to='/upload/multiple' htmlFor='createButton' className='font-body--2-bold create-item--link'>
            Create Multiple
          </Link>
          <button id='createButton'>
            <ArrowRight fill='#777E90' />
          </button>
          <div className='create-item--button'>
            <Button text='Create Multiple' path='/upload/multiple' isColored={true} />
          </div>
        </>
      }
    </div>
  )
}

export default CreateItemCard