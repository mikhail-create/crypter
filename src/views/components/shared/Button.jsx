import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, size, isColored, iconPosition, icon, path }) => {
    const buttonSize = size === 'Medium' ? 'button--medium font-button--1' : 'button--small font-button--2';
    const buttonColor = isColored ? 'button--colored' : '';
    const hasIcon = icon ? true : false;
    const isIconLeft = iconPosition === 'Left';

    return (
        <button className={`button ${buttonSize} ${buttonColor}`}>
            {isIconLeft && hasIcon && <div className="button-icon">{icon}</div>}
            <Link to={path} className="button-text">{text}</Link>
            {!isIconLeft && hasIcon && <div className="button-icon">{icon}</div>}
        </button>
    );
};

export default Button;
