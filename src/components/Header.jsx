import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "./../assets/logo.png"

const Header = () => {
    return (
        <div className='container'>
            <img src={logo} alt="" className="logo" />
            <nav>
                <ul>
                    <li><NavLink to ="/home" className={({ isActive }) => (isActive ? 'button active' : 'button inactive')}>Home</NavLink></li>
                    <li><NavLink to ="/search" className={({ isActive }) => (isActive ? 'button  active' : 'button inactive')}>Search</NavLink></li>   
                    <li><NavLink to ="/about" className={({ isActive }) => (isActive ? 'button  active' : 'button inactive')}>About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;