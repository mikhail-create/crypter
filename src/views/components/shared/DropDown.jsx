import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';

function DropDown({ items, label }) {
  const [placeholder, setPlaceholder] = useState(items[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeDropDownState = (label) => {
    setPlaceholder(label)
    setIsMenuOpen(false)
  }

  return (
    <div className='dropdown'>
      <label className='font-hairline--2'>{label}</label>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='font-caption--1-bold dropdown-field'>
        <span>{placeholder}</span>
        <div className='dropdown-field--arrow'>
          <ArrowDown width={12} />
        </div>
      </div>
      <div
        className={`dropdown-list ${isMenuOpen ? 'dropdown--active' : 'dropdown--inactive'}`}
      >
        <ul>
          {items &&
                        items.map((item, index) => (
                          <DropDownItem itemName={item} key={index} changeDropDownState={changeDropDownState} />
                        ))}
        </ul>
      </div>
    </div>
  );
}

function DropDownItem({ itemName, changeDropDownState }) {
  return <li onClick={() => changeDropDownState(itemName)} className='dropdown-item font-caption--1'>{itemName}</li>;
}

export default DropDown;
