import React, { useState } from 'react';
import './programs.css';
import incubationprogram from '../img/incubationprogram.png';
import nidhiprayas from '../img/nidhiprayas.png';
import big from '../img/big.jpg';
import mentorshipprogram from '../img/mentorshipprogram.png';
import preincubation from '../img/preincubation.png';
import startupprogram from '../img/startupprogram.jpg';
function Programs() {
return (
    <>
    <div className='programhead'>
    <h2 className='prmainh'>PROGRAMS</h2>
    <p className='prhead'>Latest Announcements</p>
    </div>

        <div className='progcon1'>
        <div className='pcard1'>
            <img src={incubationprogram} alt='Image' className='progimg'></img>
            <h2>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button><b>Apply Now</b></button>   
        </div>

        <div className='pcard1'>
            <img src={nidhiprayas} alt='Image' className='progimg'></img>
            <h2>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button><b>Apply Now</b></button>   
        </div>

        <div className='pcard1'>
            <img src={big} alt='Image' className='progimg'></img>
            <h2>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button><b>Apply Now</b></button>
        </div>

        <div className='pcard1'>
            <img src={mentorshipprogram} alt='Image' className='progimg'></img>
            <h2>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button><b>Apply Now</b></button>
        </div>

        <div className='pcard1'>
            <img src={preincubation} alt='Image' className='progimg'></img>
            <h2>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button><b>Apply Now</b></button>
        </div>

        <div className='pcard1'>
            <img src={startupprogram} alt='Image' className='progimg'></img>
            <h2>Applications Open</h2>
            <button className='readbutton'><b>Read More</b></button>
            <button><b>Apply Now</b></button>
        </div>


        </div>
    </>
    );
}
export default Programs;