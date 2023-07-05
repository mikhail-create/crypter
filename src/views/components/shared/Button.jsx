import React from 'react'

function Button({ text, isColored, isBiggerFont, buttonWidth, buttonHeight }) {
    const ButtonStyle = {
        width: buttonWidth,
        height: buttonHeight
    }

    return (
        <button
        style={ButtonStyle}
        className={`
            ${"button"} 
            ${isColored && "button--colored"} 
            ${isBiggerFont && "button--bigger"}
        `}>
            {text}
        </button>
    )
}

export default Button