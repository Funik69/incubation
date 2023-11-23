import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import investorimg from '../img/investor.jpg';
import mentorimg from '../img/mentor.jpg';
import './collaborate.css';
function Collaborate() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <div className='colmaindiv'>
                <h1 className='colhead'><u>Collaborate with Us</u></h1>
            </div>
            <div className='colinfo'>
                <div className='investor'>
                    <h1 className='shorthead'><i>INVEST WITH US</i></h1>
                    <img src={investorimg}></img>
                    <p>An effort to connect potential startups with the capable and helping hands in order to promote effective communication and insightful connections among them.</p>
                    <button onClick={() => navigate("/Investor")} className='usefulbut'><b>Become Investor</b></button>
                </div>
                <div className='mentor'>
                    <h1 className='shorthead'><i>PROVIDE MENTORSHIP</i></h1>
                    <img src={mentorimg}></img>
                    <p>With an intent of guidance in mind, we are on the path of connecting expert mentors to growing startups so that with the right mentorship, they will reach great heights. </p>
                    <button onClick={() => navigate("/Mentor")} className='usefulbut'><b>Become Mentor</b></button>
                </div>
            </div>
        </div>
    );
}
export default Collaborate;