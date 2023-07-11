import React, { useState } from 'react';

function ToggleButton() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="toggle">
            <input
                className='toggle--input'
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            <span className="slider"></span>
        </label>
    );
}

export default ToggleButton;
