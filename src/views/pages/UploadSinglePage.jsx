import React from 'react'
import CardMedium from 'views/components/CardMedium'
import Button from 'views/components/shared/Button'
import CustomInput from 'views/components/shared/CustomInput';
import DropDown from 'views/components/shared/DropDown';
import DropZone from 'views/components/shared/DropZone'

function UploadSinglePage() {

    const handleFileUpload = (file) => {
        // Обработка данных о загруженном файле
        console.log(file);
    };

    return (
        <div className='upload-single'>
            <div className='upload-single--item'>
                <div className='item-header'>
                    <h2 className='font-headline--2'>
                        Create single collectible
                    </h2>
                    <Button text='Switch to Multiple' />
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
                    <CustomInput placeholder='e. g. "Redeemable Bitcoin Card with logo"' label='Item Name' />
                    <CustomInput placeholder='e. g. “After purchasing you will able to recived the logo...”' label='Description' />
                    <div className='item-detail--settings'>
                        <DropDown items={['0%', '10%', '20%']} label='Royalties' />
                        <CustomInput placeholder='e. g. Size' label='Size' />
                        <CustomInput placeholder='e. g. Propertie' label='Propertie' />
                    </div>
                </div>
            </div>
            <div className='upload-single--preview'>
                <CardMedium />
            </div>
        </div>
    )
}

export default UploadSinglePage