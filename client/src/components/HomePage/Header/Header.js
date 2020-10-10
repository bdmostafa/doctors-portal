import React from 'react';
import Navbar from './NavBar/NavBar';
import './Header.css';
import Banner from './Banner/Banner';


const Header = () => {

    return (
        <div className="header-container">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;