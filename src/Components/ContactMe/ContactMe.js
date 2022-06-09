import React from 'react';
import './ContactMe.css'
import phone from '../../images/phone.png'
import location from '../../images/location.png'
import mail from '../../images/mail.png'
import website from '../../images/website.png'

const ContactMe = () => {
    return (
        <div id='contactme' className='contact-container'>
            <div className='width-adjustment'>
                <h2><span>Contact Me</span></h2>
                <div className='contact'>
                    <div>
                        <form action="">
                            <label htmlFor="name">Name</label> <br />
                            <input type="text" name="name" id="" /><br />
                            <label htmlFor="email">Email</label><br />
                            <input type="text" name="email" id="" /><br />
                            <label htmlFor="message">Message</label><br />
                            <textarea name="message" id="" cols="66" rows="10"></textarea>
                            <input className='submit' type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className='adress'>
                        <h4>Address</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, temporibus. Ipsam labore eum nihil animi aliquam architecto blanditiis culpa similique. Eius autem doloremque molestias, velit aliquid accusamus beatae adipisci dolores.</p>
                        <div className='flexible-contact'>
                            <img src={phone} alt="" />
                            <p>018xxxxxxxxxxxx</p>
                        </div>
                        <div className='flexible-contact'>
                            <img src={mail} alt="" />
                            <p>omarfurkan92@gmail.com</p>
                        </div>
                        <div className='flexible-contact'>
                            <img src={website} alt="" />
                            <p>www.xxxxxxxxxx.com</p>
                        </div>
                        <div className='flexible-contact'>
                            <img src={location} alt="" />
                            <p>Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;