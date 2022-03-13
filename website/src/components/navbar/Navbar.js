import React, {useState, useEffect} from 'react';
import {BsFillCloudHaze2Fill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import NavLink from './NavLink';
import './Navbar.css'


function Navbar() {



  return (
    <>
        <nav className='navbar'>
            <div className='nav-container'>

                 {/* Here we want to put our logo button that routes back to the homepage */}
                <Link to='/' className='logo-btn'>
                    <BsFillCloudHaze2Fill className='logo-icon'/>crub-hub 
                </Link>

                {/* Hamburger Menu Icon */}
                <div className='menu-icon'></div>
                {/* unordered list of all the nav links */}
                <ul className='nav-menu'>
                    <NavLink path='/' label='Editor'/>
                    <NavLink path='/' label='Web Portfolio'/>
                    <NavLink path='/' label='Art'/>
                    <NavLink path='/' label='About'/>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar