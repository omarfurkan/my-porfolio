import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;