import React from 'react'
import CustomLabel from 'views/components/shared/CustomLabel'
import DropDown from 'views/components/shared/DropDown'

function UploadPage() {
  return (
    <div>
        <CustomLabel text='Default' isComingGhost={true}/>
        <DropDown title='Price' items={['Highest price', 'Lowest price']} />
    </div>
  )
}

export default UploadPage