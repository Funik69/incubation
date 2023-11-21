import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './eligibility.css';
function Eligibility() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const navigate = useNavigate();
    const name = localStorage.getItem('auth');
return (
    <div className="here3"> 
        <div id="cover">
        <h2 className="h121">APPLY</h2>
      </div>
            <div className='dparent'>
                <div className='div1'>
                    <h3 className='heading'> Who can Apply ? </h3>
                    <p className='epara'>- Any start-up company</p>
                    <p className='epara'>- Faculties / Staff / Students</p>
                    <p className='epara'>- Any Innovative Mind</p>
                    <h4>In the Technology areas of - </h4>
                    <p className='epara'>- Information and Communication</p>
                    <p className='epara'>- Electronics and Instrumentation</p>
                    <h4>In the following sectors - </h4>
                    <p className='epara'>- Iot</p>
                    <p className='epara'>- Automation</p>
                    <p className='epara'>- Mechatronics</p>
                    <p className='epara'>- Robotics</p>
                </div>
                <div className='div2'>
                    <h3 className='heading'> How to Apply ? </h3>
                    <p className='epara'>- Login to the Portal.</p>
                    <p className='epara'>- Fill the Registration Form if you meet the eligibility criteria.</p>
                    <p className='epara'>- After review of your application , the final result will be declared.</p>
                    <p className='epara'>- Offer of Incubation provided to selected applicants.</p>
                    <p className='epara'>- Accept the offer and sign the agreement.</p>
                </div>
            </div>
            <button onClick={name ? () => navigate("/StartupForm") : () => navigate("/login")} className='eliapply'><b>Apply Now</b></button>
        
    </div>
    );
}
export default Eligibility;