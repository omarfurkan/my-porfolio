import React from 'react';
import './Projects.css'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='width-adjustment'>
                <h2> <span>Projects</span></h2>
                <div className='projects'>
                    <div className='project'>
                        <img src={project1} alt="" />
                        <h4>Omar Advocacy (Service Provider Website)</h4>
                        <p>Omar Advocacy is an independent service-providing website where users can seek legal help
                            and advice.</p>
                    </div>
                    <div className='project'>
                        <img src={project2} alt="" />
                        <h4>Truck Revenditore (Inventory Management Website)</h4>
                        <p>Truck Revenditore is about inventory Management website for trucks all over the country.</p>
                    </div>
                    <div className='project'>
                        <img src={project3} alt="" />
                        <h4>Vartrap (Manufacturer Website)</h4>
                        <p>Vartrap is about Drill Machine manufacturer website, where you will find almost all categories of
                            drill machines for wholesale, retail or regular use.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;