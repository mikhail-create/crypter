import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as QR } from 'assets/icons/qr.svg';
import Button from 'views/components/shared/Button';
import QRCodePreview from 'assets/QR-1.png';

function ConnectQRGenerator() {
  const [haveAccount, setHaveAccount] = useState(true)
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [isTermsConfirmed, setIsTermsConfirmed] = useState(false);

  const handleButton = (value) => {
    setHaveAccount(value);
  };

  const handleAgeConfirmation = (event) => {
    setIsAgeConfirmed(event.target.checked);
  };

  const handleTermsConfirmation = (event) => {
    setIsTermsConfirmed(event.target.checked);
  };

  const isButtonDisabled = !isAgeConfirmed || !isTermsConfirmed;

  return (
    <div className='connect-qr'>
      {
        haveAccount ?
          <div className='connect-qr--wrapper scan-qr'>
            <div className='connect-qr--header'>
              <h3 className='font-headline--3'>
                Scan to connect
              </h3>
              <span className='font-caption--2'>
                Powered by UI8.Wallet
              </span>
            </div>
            <div className='connect-qr--content'>
              <div className='qr-card'>
                <QR />
              </div>
            </div>
            <div className='connect-qr--action'>
              <Button onClick={() => handleButton(!haveAccount)} text='Don’t have a wallet app?' size='Medium' />
            </div>
          </div>
          :
          <div className='connect-qr--wrapper create-account'>
            <div className='connect-qr--header'>
              <h3 className='font-headline--3'>
                Terms of service
              </h3>
              <p className='font-caption--2'>
                Please take a few minutes to read and understand <Link className='font-caption--2-bold'>Stacks <br />
                  Terms of Service.</Link>  To continue, you’ll need to accept the terms of services by checking the boxes.
              </p>
            </div>
            <div className='connect-qr--body'>
              <img srcSet={QRCodePreview} alt='Cubes Image' />
            </div>
            <div className='connect-qr--fields'>
              <div className='field'>
                <input type='checkbox' name='age' id='ageCheckbox' onChange={handleAgeConfirmation} />
                <label htmlFor='ageCheckbox'>I am at least 13 years old</label>
              </div>
              <div className='field'>
                <input type='checkbox' name='rules' id='rulesCheckbox' onChange={handleTermsConfirmation} />
                <label htmlFor='rulesCheckbox'>I agree to Stack&apos;s terms of service</label>
              </div>
            </div>
            <div className='connect-qr--actions'>
              <Button onClick={() => handleButton(!haveAccount)} text='Cancel' size='Medium' />
              <Button text='Get started now' size='Medium' isColored={true} isDisabled={isButtonDisabled} />
            </div>
          </div>
      }
    </div>
  )
}

export default ConnectQRGenerator