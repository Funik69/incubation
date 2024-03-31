import React, { useState , useEffect } from 'react';
import './portfolio.css';
import mentorport from '../img/mentorport.jpg';
import { useMentorContext } from '../context/MentorContext';

function Mentorpfolio() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const {data} = useMentorContext();
    const filteredData = data.filter((i)=> i.status ==='accepted');
return (
    <>
    <div className='portCover'>
    <h1>List of Mentors</h1>
    </div>

        <div className='con1'>
        {
            filteredData.map((i) => (
            <div className='card1' key={i._id}>
            <img src={mentorport} alt='Image' style={{aspectRatio: '4/2', objectFit: 'contain', maxWidth: '100%', height: 'auto' }}></img>
            <h2 className="portfolio_heading_">{i.mname}</h2>
            <p className='port_para'><b>Sector of Expertise : </b>{i.msector}</p>
            <p className='port_para'><b>Yrs of Experience : </b>{i.myear}</p>
        </div>
            ))
        }
        </div>
    </>
    );
}
export default Mentorpfolio;