import React from 'react';

function CustomInput({ label, placeholder }) {
    return (
        <div className='custom-input'>
            <label className='font-hairline--2'>{label}</label>
            <input className='input' type="text" placeholder={placeholder} />
        </div>
    );
}

export default CustomInput;
