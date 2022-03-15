import React, {useState, useEffect} from 'react';
import {BsFillCloudHaze2Fill, BsFillGearFill } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom';
import NavLink from './NavLink';


import './Navbar.css'


function Navbar() {

    const [isClicked, setisClicked] = useState(false); //is the hamburger clicked?
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    
    const handleClick = () => {
        setisClicked(!isClicked);
        setIsMenuExpanded(!isMenuExpanded)

    };
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
            <div 
                className='menu-icon' 
                onClick={handleClick} 
                aria-expanded={isMenuExpanded}
            >

                {!isClicked ? <GiHamburgerMenu className='accent-color sr-only'/> : <HiX className='page-color'/>}

            </div>

            
            <div className='right-nav-side flex'>
                <nav>
                    {/* unordered list of all the nav links */}
                    <ul      
                        className='nav-list flex'
                        data-visible={isClicked}
                    >

                        <NavLink path='/' label='Editor' onClick={closeMobileMenu}/>
                        <NavLink path='/' label='Web Portfolio' onClick={closeMobileMenu}/>
                        <NavLink path='/' label='Art' onClick={closeMobileMenu}/>
                        <NavLink path='/' label='About' onClick={closeMobileMenu}/>

                    </ul>
                </nav>
                <div className='settings' data-visible={isClicked}>

                    <BsFillGearFill />

                </div>
            </div>
            
        </header>
    </>
  )
}

export default Navbar