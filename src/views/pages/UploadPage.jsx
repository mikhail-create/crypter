import { React, useEffect } from 'react'
import Button from 'views/components/shared/Button'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import CreateItemCard from 'views/components/CreateItemCard';

function UploadPage() {
  useEffect(() => {
    document.title = 'Upload'
  }, [])

  return (
    <div className='upload'>
      <div className='upload-nav'>
        <Button text='Back to home' iconPosition='Left' icon={<ArrowLeft fill='black'/>} path='/' />
        <div className='upload-nav--path'>
          <span className='font-button--2'>
            Home
          </span>
          <ArrowRight fill='black'/>
          <span className='font-button--2'>
            Upload Item
          </span>
        </div>
      </div>
      <div className='upload--divider'></div>
      <div className='upload-headline'>
        <h2 className='font-headline--2'>
          Upload item
        </h2>
        <p className='font-caption--1 upload-headline--description'>
          Choose <span>“Single”</span> if you want your collectible to be one of a kind or <span>“Multiple”</span> if you want to sell one
          collectible multiple times
        </p>
      </div>
      <div className='upload-cards'>
        <div className='upload-cards--option'>
          <div>
            <CreateItemCard isSingle={true} />
          </div>
          <div>
            <CreateItemCard />
          </div>
        </div>
        <span className='font-caption--2 upload-cards--description'>
          We do not own your private keys and cannot access your funds without your confirmation.
        </span>
      </div>
    </div>
  )
}

export default UploadPage