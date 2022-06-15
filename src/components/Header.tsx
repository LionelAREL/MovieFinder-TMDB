import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "./../assets/logo.png";

const Header = () => {
    return (
        <div className='container'>
            <img src={logo} alt="" className="logo" />
            <nav>
                <ul>
                    <li><NavLink to ="/home" className={({ isActive }) => (isActive ? 'button active' : 'button inactive')}>Accueil</NavLink></li>
                    <li><NavLink to ="/search" className={({ isActive }) => (isActive ? 'button  active' : 'button inactive')}>Recherche</NavLink></li>   
                    <li><NavLink to ="/about" className={({ isActive }) => (isActive ? 'button  active' : 'button inactive')}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;