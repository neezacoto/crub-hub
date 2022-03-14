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
        <header className='navbar-container flex'>

            {/* Here we want to put our logo button that routes back to the homepage */}
            <Link to='/' className='logo-container'>

                <BsFillCloudHaze2Fill className='logo-icon'/>
                crub-hub 

            </Link>

            {/* Hamburger Menu Icon */}
            <div className='menu-icon' onClick={handleClick}>

                {!isClicked ? <GiHamburgerMenu className='accent-color sr-only'/> : <HiX className='page-color'/>}

            </div>

            <nav>
                {/* unordered list of all the nav links */}
                <ul 
                    className={ isClicked? 'nav-list flex active' : 'nav-list flex' }
                >

                    <NavLink path='/' label='Editor' onClick={closeMobileMenu}/>
                    <NavLink path='/' label='Web Portfolio' onClick={closeMobileMenu}/>
                    <NavLink path='/' label='Art' onClick={closeMobileMenu}/>
                    <NavLink path='/' label='About' onClick={closeMobileMenu}/>

                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar