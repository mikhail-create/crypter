import React from 'react'

function Button({text, isColored}) {
  return (
    <button className={`${"button"} ${isColored && "button--colored"}`}>
        {text}
    </button>
  )
}

export default Button