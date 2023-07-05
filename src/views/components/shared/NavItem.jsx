import React from 'react'

function NavItem({ name, isSelected, handleCategoryChange }) {
    return (
        <span onClick={() => handleCategoryChange(name)} className={`font-button--2 ${isSelected ? 'navitem--selected' : 'navitem'}`}>
            {name}
        </span>
    )
}

export default NavItem