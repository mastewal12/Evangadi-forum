import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className ='header'>
            <img  className="header__logo"
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" 
            />
            <div className='links_wrapper'>
                <ul className='header_links'>
                    <li><a href="">Home</a></li>
                    <li><a href="">How it Works</a></li>
                    <li><a href="">SIGN IN</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Header;
