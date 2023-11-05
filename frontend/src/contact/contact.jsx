import React, { useState } from 'react';
import './contact.css';
import mail from '../img/emaillogo.png';
import mob from '../img/moblogo.png';
import location from '../img/locationlogo.png';

function Contact() {
return ( 
    <>
    <div className='portCover'>
      <h1>Contact Details</h1>
    </div>
    <div className="contact-form">
      <div className="card">
      <img className='imgg' src={location}></img>
        <h3 className='h3f'>Location</h3>
        <p className='p1'>Incubation Center - IET DAVV, Khandwa road, Indore 452020</p>
      </div>
      <div className="card">
      <img className='imgg' src={mob}></img>
        <h3 className='h3f'>Mobile Number</h3>
        <p className='p1'>(123) 456-7890</p>
      </div>
      <div className="card">
      <img className='imgg' src={mail}></img>
        <h3 className='h3f'>Email Address</h3>
        <p className='p1'>Write to us at example@example.com</p>
      </div>
    </div>
    </>
    );
}
export default Contact;