import React from 'react'
import "./Switch.css"

function Switch(props) {
  return (
    <label className='switch'>
        <input type='checkbox' onClick={props.onClick} />
        <span className='slider' />
    </label>
  )
}

export default Switch