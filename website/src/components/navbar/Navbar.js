import React, {useState, useEffect} from 'react';
import {BsFillCloudHaze2Fill, } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom';
import NavLink from './NavLink';


import './Navbar.css'


function Navbar() {

    const [isClicked, setisClicked] = useState(false); //is the hamburger clicked?
    
    const handleClick = () => setisClicked(!isClicked);
    const closeMobileMenu = () => setisClicked(false);


  return (
    <>
        <nav className='navbar'>
            <div className='nav-container'>

                 {/* Here we want to put our logo button that routes back to the homepage */}
                <Link to='/' className='logo-btn'>

                    <BsFillCloudHaze2Fill className='logo-icon'/>
                    crub-hub 

                </Link>

                {/* Hamburger Menu Icon */}
                <div className='menu-icon' onClick={handleClick}>

                    {!isClicked ? <GiHamburgerMenu /> : <HiX />}

                </div>
                {/* unordered list of all the nav links */}
                <ul 
                    className={ isClicked? 'nav-menu active' : 'nav-menu' }
                >

                    <NavLink path='/' label='Editor' onClick={closeMobileMenu}/>
                    <NavLink path='/' label='Web Portfolio' onClick={closeMobileMenu}/>
                    <NavLink path='/' label='Art' onClick={closeMobileMenu}/>
                    <NavLink path='/' label='About' onClick={closeMobileMenu}/>

                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar