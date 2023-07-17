import React, { useState, useEffect } from 'react'
import CardMedium from 'views/components/CardMedium'
import Button from 'views/components/shared/Button'
import CustomInput from 'views/components/shared/CustomInput';
import DropDown from 'views/components/shared/DropDown';
import DropZone from 'views/components/shared/DropZone'
import ToggleButton from 'views/components/shared/ToggleButton';
import { ReactComponent as Plus } from 'assets/icons/plus-2.svg'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import { ReactComponent as Loading } from 'assets/icons/loading.svg'
import { ReactComponent as Close } from 'assets/icons/close-circle.svg'
import NFTImagePlaceholder from 'assets/NFT.webp'
import UploadModal from 'views/components/UploadModal';

function UploadSinglePage() {
  const [isSaving, setIsSaving] = useState(false)
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [royalties, setRoyalties] = useState('');
  const [size, setSize] = useState('');
  const [property, setProperty] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false) // ИЗМЕНИТЬ

  useEffect(() => {
    // При открытии модального окна добавляем стиль "overflow: hidden" к body
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // При закрытии модального окна удаляем стиль "overflow: hidden" из body
      document.body.style.overflow = '';
    }

    // Функция cleanup, которая будет вызвана при размонтировании компонента
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleDescriptionChange = (value) => {
    console.log('Item Name:', value);
    setDescription(value)
    setIsSaving(true);
  };

  const handleItemNameChange = (value) => {
    console.log('Item Name:', value);
    setItemName(value)
    setIsSaving(true);
  };

  const handleFileUpload = (file) => {
    // Обработка загруженного файла
    setSelectedImage(URL.createObjectURL(file));
  };

  const clearInputs = () => {
    console.log({
      itemName,
      description,
      royalties,
      property,
      size
    });
    setSelectedImage(null)
    setDescription(null)
    setIsSaving(null)
    setItemName(null)
    setRoyalties(null)
    setProperty(null)
    setSize(null)
  }

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='upload-single'>
      {
        isModalOpen && <UploadModal onCloseButtonClick={handleCloseButtonClick} />
      }
      <div className='upload-single--item'>
        <div className='item-header'>
          <h2 className='font-headline--2'>
            Create single collectible
          </h2>
          <Button text='Switch to Multiple' path='/upload/multiple' />
        </div>
        <div className='item-upload'>
          <span className='font-body--2-bold'>
            Upload file
          </span>
          <span className='font-caption--2'>
            Drag or choose your file to upload
          </span>
          <div className='item-upload--dropzone'>
            <DropZone accept='.png, .gif, .webp, .mp3, .mp4' maxSize='1GB' onFileUpload={handleFileUpload} />
          </div>
        </div>
        <div className='item-detail'>
          <span className='font-body--2-bold'>Item Details</span>
          <CustomInput
            onChange={handleItemNameChange}
            placeholder='e. g. "Redeemable Bitcoin Card with logo"'
            label='Item Name'
          />
          <CustomInput
            onChange={handleDescriptionChange}
            placeholder='e. g. “After purchasing you will able to recived the logo...”'
            label='Description'
          />
          <div className='item-detail--settings'>
            <DropDown items={['0%', '10%', '20%']} label='Royalties' />
            <CustomInput placeholder='e. g. Size' label='Size' />
            <CustomInput placeholder='e. g. Propertie' label='Propertie' />
          </div>
        </div>
        <div className='item--divider'>

        </div>
        <div className='item-detail'>
          <div className='item-detail--property'>
            <div className='property--column'>
              <label className='font-body--2-bold'>
                Put on sale
              </label>
              <span className='font-caption--2'>
                You’ll receive bids on this item
              </span>
            </div>
            <ToggleButton />
          </div>
          <div className='item-detail--property'>
            <div className='property--column'>
              <label className='font-body--2-bold'>
                Instant sale price
              </label>
              <span className='font-caption--2'>
                Enter the price for which the item will be instantly sold
              </span>
            </div>
            <ToggleButton />
          </div>
          <div className='item-detail--property'>
            <div className='property--column'>
              <label className='font-body--2-bold'>
                Unlock once purchased
              </label>
              <span className='font-caption--2'>
                Content will be unlocked after successful transaction
              </span>
            </div>
            <ToggleButton />
          </div>
          <div className='item-detail--property'>
            <div className='property--column'>
              <label className='font-body--2-bold'>
                Choose collection
              </label>
              <span className='font-caption--2'>
                Choose an exiting collection or create a new one
              </span>
            </div>
          </div>
          <div className='item-detail-collection'>
            <div className='item-detail-collection--block'>
              <Plus />
            </div>
            <span className='font-button--2'>
              Create <br /> collection
            </span>
          </div>
        </div>
        <div className='item--actions'>
          <Button text='Create item' size='Medium' isColored={true} icon={<ArrowRight fill='white' />} />
          {
            isSaving &&
            <div className='item--actions--saving'>
              <span className='font-button--1'>
                Auto saving
              </span>
              <div className='item--actions--spinner'>
                <Loading fill='black' />
              </div>
            </div>
          }
        </div>
      </div>
      <div className='upload-single-preview'>
        <CardMedium
          title={itemName || 'Black Golden Tiger'}
          instaPrice='2.45'
          stockAmount={3}
          bid='0.001'
          isNewBids={true}
          imgSrc={selectedImage || NFTImagePlaceholder}
        />
        <div className='upload-single-preview--clear' onClick={clearInputs}>
          <Close />
          <span className='font-button--1'>
            Clear all
          </span>
        </div>
      </div>
      <div className='item--actions-mobile'>
        <Button text='Create item' size='Medium' isColored={true} icon={<ArrowRight fill='white' />} />
      </div>
    </div>
  )
}

export default UploadSinglePage