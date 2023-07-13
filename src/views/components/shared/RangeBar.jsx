import React, { useState } from 'react';

function RangeBar({ min, max, value, onChange }) {
  const [rangeValue, setRangeValue] = useState(value);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={rangeValue}
        step={1}
        onChange={handleRangeChange}
        className="range-bar"
      />
      <div className="range-bar--values">
        <span className='font-caption--1-bold'>
          {min + ' ETH'}
        </span>
        <span className='font-caption--1-bold'>
          {max + ' ETH'}
        </span>
      </div>
    </div>

  );
}

export default RangeBar;
