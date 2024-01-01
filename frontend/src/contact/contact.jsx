import React, { useState , useEffect} from 'react';
import './contact.css';
import mail from '../img/emaillogo.png';
import mob from '../img/moblogo.png';
import location from '../img/locationlogo.png';

function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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
    <div>
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.829305257924!2d75.88051963963589!3d22.681104433239234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc0e5a38f37%3A0x3ec6e125a3e3cf6f!2sLibrary%2C%20IET%20DAVV!5e0!3m2!1sen!2sin!4v1699642535529!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: '0' }} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
    );
}
export default Contact;