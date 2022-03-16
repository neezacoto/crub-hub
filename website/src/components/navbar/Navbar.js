import React, {useState, useEffect} from 'react';
import {BsFillCloudHaze2Fill, BsFillGearFill } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom';
import NavLink from './NavLink';
import { StyledNavContainer } from '../styles/Navbar.styled';
import ThemeProvider from 'styled-components'
import Switch from '../switch/Switch';


function Navbar(props) {

    const [isClicked, setisClicked] = useState(false); //is the hamburger clicked?

    const handleClick = () => {
        setisClicked(!isClicked);
    };
    const closeMobileMenu = () => setisClicked(false);

    const [isSettingVisible, setIsSettingVisible] = useState(false);

    const settingsToggle = () => {
        setIsSettingVisible(!isSettingVisible);
    }


  return (
    <>
        
        <StyledNavContainer>        
                <header className='navbar-container flex'>

                {/* Here we want to put our logo button that routes back to the homepage */}
                <Link to='/' className='logo-container'>

                    <BsFillCloudHaze2Fill className='logo-icon'/>
                    crub-hub 
                    <div className='logo-divider' />
                </Link>

                {/* Hamburger Menu Icon */}
                <div 
                    className='menu-icon' 
                    onClick={handleClick} 
                >

                    {!isClicked ? <GiHamburgerMenu className='accent-color sr-only'/> : <HiX className='menu-x page-color'/>}

                </div>

                
                <div className='right-nav-side flex'>
                    <nav>
                        {/* unordered list of all the nav links */}
                        <ul      
                            className='nav-list flex'
                            data-visible={isClicked}
                        >
                            
                            <div className='mobile-settings' data-visible={isClicked} onClick={settingsToggle}><BsFillGearFill /></div>
                            <NavLink path='/editor' label='Editor' onClick={closeMobileMenu}/>
                            <NavLink path='/web-portfolio' label='Web Portfolio' onClick={closeMobileMenu}/>
                            <NavLink path='/art' label='Art' onClick={closeMobileMenu}/>
                            <NavLink path='/about' label='About' onClick={closeMobileMenu}/>

                        </ul>
                    </nav>
                    <div className='settings' data-visible={isClicked} onClick={settingsToggle}>

                        <BsFillGearFill />

                    </div>
                </div>

                
                
            </header>
            <div className='full-settings' data-visible={isSettingVisible} >
                    <HiX className='settings-x page-color' onClick={settingsToggle}/>
                    <h1>Settings  .</h1>
                    <nav >
                        <ul>
                            <li>
                                <h2>Appearance</h2>
                                <label>
                                    <span>Dark Mode </span>
                                    <Switch onClick={props.toggle}/>
                                </label>
                                
                            </li>
                            <li>
                                
                            </li>
                    
                        </ul> 
                    </nav> 
                </div>
        </StyledNavContainer>

    </>
  )
}

export default Navbar