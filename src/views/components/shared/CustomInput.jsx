import React, { useState } from 'react';

function CustomInput({ label, placeholder, onChange }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Вызов переданной функции onChange с новым значением
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className='custom-input'>
            <label className='font-hairline--2'>{label}</label>
            <input
                className='input'
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default CustomInput;
