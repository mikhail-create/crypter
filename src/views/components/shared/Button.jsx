import React from 'react';

const Button = ({ text, size, isColored, iconPosition, icon }) => {
    const buttonSize = size === 'Medium' ? 'button--medium font-button--1' : 'button--small font-button--2';
    const buttonColor = isColored ? 'button--colored' : '';
    const hasIcon = icon ? true : false;
    const isIconLeft = iconPosition === 'Left';

    return (
        <button className={`button ${buttonSize} ${buttonColor}`}>
            {isIconLeft && hasIcon && <span className="button-icon">{icon}</span>}
            <span className="button-text">{text}</span>
            {!isIconLeft && hasIcon && <span className="button-icon">{icon}</span>}
        </button>
    );
};

export default Button;
