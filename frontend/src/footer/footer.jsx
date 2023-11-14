import React, { useState } from 'react';
import './footer.css';
import { FaFacebook , FaGithub , FaLinkedin } from "react-icons/fa";
function Footer() {
    return ( 
        <div className='total'>
            {/*<!-- Site footer -->*/}
                <footer className ="site-footer">
                    <div className ="container">
                        <div className ="rowfoot">
                            <div className ="div1">
                                <h6>About</h6>
                                <p className ="text-justify">DAVV - Incubation Center is obliged to provide constant support and motivation to its aligned Incubatees.<br/> Our sole purpose is to help entrepreneurs grow their business.We assure that we'll support every idea that has the potential to be converted into a successful business.</p>
                            </div>

                            <div className ="div2">
                                <h6>Quick Links</h6>
                                <ul className ="footer-links">
                                <li><a href="./about">About</a></li>
                                <li><a href="./programs">Program</a></li>
                                <li><a href="./event">Events</a></li>
                                <li><a href="./portfolio">Portfolio</a></li>
                                <li><a href="./contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className ="div3">
                                <h6>Contact Us</h6>
                                <p className='para'>Incubation Center ,IET-DAVV ,Khandwa Road<br/>Indore (Madhya Pradesh)-452020</p>
                                <p className='para'>Mobile Number - (123) 456-7890</p>
                                <p className='para'>Write to us at :- <br/>Email Address - example@example.com</p>
                            </div>

                        </div>
                    <hr/>
                </div>
                <div className ="container">
                    <div className ="row3">
                        <div>
                            <p className ="copyright-text">Copyright &copy; 2017 All Rights Reserved by DAVV
                            </p>
                        </div>

                        <div className ="footer-social-icons">
                            <div>
                                <FaFacebook className='icons'/>
                            </div>
                            <div>
                                <FaGithub className='icons'/>
                            </div>
                            <div>
                                <FaLinkedin className='icons'/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;