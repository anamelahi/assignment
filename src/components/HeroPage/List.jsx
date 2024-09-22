import React from 'react'
import "./Hero.css"

const List = (props) => {
  return (
    <ul>
        <li><img src="https://printify.com/pfh/media/check-mark-EHPN4OB5.svg" alt="" />{props.litext}</li>
    </ul>
  )
}

export default List