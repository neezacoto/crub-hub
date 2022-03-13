import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function NavLink(props) {
  return (
    <li className='nav-item'>
        <Link 
            to={props.path} 
            className='nav-links' 
        >
            {props.label}
        </Link>
    </li>
  )
}

export default NavLink