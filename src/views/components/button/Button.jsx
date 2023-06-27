import React from 'react'
import styles from './Button.module.scss'

function Button({text, isColored}) {
  return (
    <button className={`${styles.button} ${isColored && styles.button__colored}`}>
        {text}
    </button>
  )
}

export default Button