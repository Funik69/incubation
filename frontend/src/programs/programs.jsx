import React, { useState , useEffect } from 'react';
import './programs.css';
import incubationprogram from '../img/incubationprogram.png';
import nidhiprayas from '../img/nidhiprayas.png';
import big from '../img/big.jpg';
import mentorshipprogram from '../img/mentorshipprogram.png';
import preincubation from '../img/preincubation.png';
import startupprogram from '../img/startupprogram.jpg';
import {useAlertContext} from '../context/AlertContext'
function Programs() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const {alert} = useAlertContext();
return (
    <>
    <div className='programhead'>
    <div className='portCover'>
        <h1>Programs</h1>
    </div>
    <div className='scrltext'>
      <marquee direction="left" height="100px" scrollmount="100">
      <div dangerouslySetInnerHTML={{ __html: alert.latestinfo }} />;
      </marquee>
    </div>
    </div>

        <div className='progcon1'>
        <div className='pcard1'>
            <img src={incubationprogram} alt='Image' className='progimg'></img>
            <h2 className='programhead'>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button className='programapply'><b>Apply Now</b></button>   
        </div>

        <div className='pcard1'>
            <img src={nidhiprayas} alt='Image' className='progimg'></img>
            <h2 className='programhead'>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button className='programapply'><b>Apply Now</b></button>   
        </div>

        <div className='pcard1'>
            <img src={big} alt='Image' className='progimg'></img>
            <h2 className='programhead'>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button className='programapply'><b>Apply Now</b></button>
        </div>

        <div className='pcard1'>
            <img src={mentorshipprogram} alt='Image' className='progimg'></img>
            <h2 className='programhead'>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button className='programapply'><b>Apply Now</b></button>
        </div>

        <div className='pcard1'>
            <img src={preincubation} alt='Image' className='progimg'></img>
            <h2 className='programhead'>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button className='programapply'><b>Apply Now</b></button>
        </div>

        <div className='pcard1'>
            <img src={startupprogram} alt='Image' className='progimg'></img>
            <h2 className='programhead'>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button className='programapply'><b>Apply Now</b></button>
        </div>


        </div>
    </>
    );
}
export default Programs;