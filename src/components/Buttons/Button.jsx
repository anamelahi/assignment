import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.btntext}</button>
  )
}

export default Button