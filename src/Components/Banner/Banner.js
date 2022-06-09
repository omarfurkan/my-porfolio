import React from 'react';
import './Banner.css'
import mainPin from '../../images/omarfurkan.png'
const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h3>I'm Omar Furkan,
                    Web
                    <br /> Designer & Web Developer from <br /> Chittagong, Bangladesh</h3>
                <p>I'm passionate Full Stack web developer <br /> having an experiece of web application  with ReactJS,<br /> NodeJS,ExpressJs and MongoDB</p>
                <div>
                    <p className='resume'><a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/11nZbmg5ddYEXjPUdcCXjlbZgkl5zFI6h/view?usp=sharing" download="download">Download Resume</a></p>
                </div>
            </div>
            <div>
                <img width='370px' src={mainPin} alt="" />
            </div>
        </div>
    );
};

export default Banner;