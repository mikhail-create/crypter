import React, { useState } from 'react';
import { ReactComponent as Close } from 'assets/icons/close-circle.svg';
import { ReactComponent as Upload } from 'assets/icons/file-upload.svg';
import { ReactComponent as Pencil } from 'assets/icons/pencil.svg';
import { ReactComponent as ShoppingBag } from 'assets/icons/shopping-bag.svg';
import { ReactComponent as Loading } from 'assets/icons/loading.svg';
import { ReactComponent as Check } from 'assets/icons/check.svg';
import Button from 'views/components/shared/Button';

function UploadModal({ onCloseButtonClick }) {
  const [steps, setSteps] = useState({
    firstStep: false,
    secondStep: false,
    thirdStep: false,
    firstStepLoading: false,
    secondStepLoading: false,
    thirdStepLoading: false
  });

  const handleButtonClick = (stepName) => {
    setSteps(prevSteps => ({
      ...prevSteps,
      [`${stepName}Loading`]: true
    }));

    setTimeout(() => {
      setSteps(prevSteps => ({
        ...prevSteps,
        [`${stepName}Loading`]: false,
        [stepName]: true
      }));
    }, 1000);
  };

  const stepsData = [
    {
      stepName: 'firstStep',
      icon: steps.firstStep ? <Check fill='white' /> : <Upload />,
      buttonText: steps.firstStep ? 'Done' : 'Start now',
      loadingIcon: steps.firstStepLoading && <Loading />,
      isColored: !steps.firstStep,
      isDisabled: false, // Первый шаг всегда доступен
      description: ['Upload files & Mint token', 'Call contract method'],
      onClick: () => handleButtonClick('firstStep')
    },
    {
      stepName: 'secondStep',
      icon: steps.secondStep ? <Check fill='white' /> : <Pencil />,
      buttonText: steps.secondStep ? 'Done' : 'Start now',
      loadingIcon: steps.secondStepLoading && <Loading />,
      isColored: !steps.secondStep,
      isDisabled: !steps.firstStep,
      description: ['Sign sell order', 'Sign sell order using your wallet'],
      onClick: () => handleButtonClick('secondStep')
    },
    {
      stepName: 'thirdStep',
      icon: steps.thirdStep ? <Check fill='white' /> : <ShoppingBag />,
      buttonText: steps.thirdStep ? 'Done' : 'Start now',
      loadingIcon: steps.thirdStepLoading && <Loading />,
      isColored: !steps.thirdStep,
      isDisabled: !steps.secondStep,
      description: ['Sign lock order', 'Sign lock order using your wallet'],
      onClick: () => handleButtonClick('thirdStep')
    }
  ];

  return (
    <div className="upload-modal">
      <div className="modal-content">
        <div className="modal-content--header">
          <h4 className='font-headline--4'>
                        Folow steps
          </h4>
          <Close className='close' onClick={onCloseButtonClick} height={40} width={40} />
        </div>

        {stepsData.map((step, index) => (
          <div key={index} className="modal-content--item">
            <div className='item'>

              <div className={`item--icon ${steps[step.stepName] && 'done'}`}>
                {
                  step.icon
                }
              </div>
              <div className='item--info'>
                <span className='font-body--2-bold'>
                  {step.description[0]}
                </span>
                <span className='font-caption--2'>
                  {step.description[1]}
                </span>
              </div>
            </div>
            <Button
              text={step.buttonText}
              icon={step.loadingIcon}
              size="Medium"
              isColored={step.isColored}
              isDisabled={step.isDisabled}
              onClick={step.onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadModal;