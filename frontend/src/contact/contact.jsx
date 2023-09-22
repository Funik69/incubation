import React, { useState } from 'react';
import './contact.css';
import mail from '../img/emaillogo.png';
import mob from '../img/moblogo.png';
import location from '../img/locationlogo.png';

function Contact() {
return ( 
    <>
    <div className="contact-form">
      <div className="card">
      <img src={location}></img>
        <h3>Location</h3>
        <p>Incubation Center - IET DAVV, Khandwa road, Indore 452020</p>
      </div>
      <div className="card">
      <img src={mob}></img>
        <h3>Mobile Number</h3>
        <p>(123) 456-7890</p>
      </div>
      <div className="card">
      <img src={mail}></img>
        <h3>Email Address</h3>
        <p>Write to us at example@example.com</p>
      </div>
    </div>
    </>
    );
}
export default Contact;