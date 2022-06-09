
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import './Navbar.css'
import gitPic from '../../images/github.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='flexible-navbar'>
                <h2>Omar Furkan</h2>
                <div className='flexible-link'>
                    <div><a target='_blank' rel="noopener noreferrer" href="https://github.com/omarfurkan"><img src={gitPic} alt="" /></a></div>
                    <div><a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/omarfurkan"><img width='42px' src={facebook} alt="" /></a></div>
                    <div><a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/omar-furkan-43098a98"><img width="46px" src={linkedin} alt="" /></a></div>
                    <div className='contanct-me'>
                        <a target='_blank' rel="noopener noreferrer" href="https://form.jotform.com/221594043346454"><p>Contact me</p></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;