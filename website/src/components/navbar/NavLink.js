import React from 'react'
import {Link} from 'react-router-dom'

function NavLink(props) {
    
  return (
    <li className='nav-item' >
        <Link 
            to={props.path} 
            className='nav-links'
            onClick={props.onClick} 
        >
            {props.label}
        </Link>
    </li>
  )
}

export default NavLink