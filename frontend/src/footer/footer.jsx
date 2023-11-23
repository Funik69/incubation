import React, { useState , useEffect} from 'react';
import './footer.css';
import { FaFacebook , FaGithub , FaLinkedin } from "react-icons/fa";
function Footer() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
      const handleGithubClick = () => {
        window.open('https://github.com/Funik69/incubation', "blank");
      };
      const handleLinkClick = () => {
        window.open('https://www.linkedin.com/company/e-cell-iet-davv/' , 'blank');
      }
      const handleFaceClick = () => {
        window.open('https://www.facebook.com/davv.iet/' , 'blank');
      }
    return ( 
        <div className='total'>
            {/*<!-- Site footer -->*/}
                <footer className ="site-footer">
                    <div className ="container">
                        <div className ="rowfoot">
                            <div className ="div1">
                                <h6 className='foot_link'>About</h6>
                                <p className ="text-justify">DAVV - Incubation Center is obliged to provide constant support and motivation to its aligned Incubatees.<br/> Our sole purpose is to help entrepreneurs grow their business.We assure that we'll support every idea that has the potential to be converted into a successful business.</p>
                            </div>

                            <div className ="div2">
                                <h6 className='foot_link1'>Quick Links</h6>
                                <ul className ="footer-links">
                                    <li className='apply_link'><a href='./Eligibility'>Startup Registration</a></li>
                                    <br></br>
                                    <li className='apply_link'><a href='./Investor'>Become Investor</a></li>
                                    <br></br>
                                    <li className='apply_link'><a href='./Mentor'>Become Mentor</a></li>
                                    <br></br>
                                </ul>
                            </div>

                            <div className ="div3">
                                <h6 className='foot_link'>Contact Us</h6>
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
                            <p className ="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                             Priyanshi Shivhare, Raghav Upadhyay, Shivanshi Gupta
                            </p>
                        </div>

                        <div className ="footer-social-icons">
                            <div onClick={handleFaceClick} style={{ cursor: 'pointer'}}>
                                <FaFacebook className='icons'/>
                            </div>
                            <div onClick={handleGithubClick} style={{ cursor: 'pointer' }}>
                                <FaGithub className='icons'/>
                            </div>
                            <div onClick={handleLinkClick} style={{cursor: 'pointer'}}>
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