import React, { useState, useEffect } from "react";
import "./contact.css";
import mail from "../img/emaillogo.png";
import mob from "../img/moblogo.png";
import location from "../img/locationlogo.png";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="portCover">
        <h1>Contact Details</h1>
      </div>
      <div className="contact-form">
        <div className="card">
          <img className="imgg" src={location}></img>
          <h3 className="h3f">Location</h3>
          <p className="p1">
            Incubation Center - IET DAVV, Khandwa road, Indore 452020
          </p>
        </div>
        <div className="card">
          <img className="imgg" src={mob}></img>
          <h3 className="h3f">Mobile Number</h3>
          <p className="p1">(123) 456-7890</p>
        </div>
        <div className="card">
          <img className="imgg" src={mail}></img>
          <h3 className="h3f">Email Address</h3>
          <p className="p1">Write to us at example@example.com</p>
        </div>
      </div>
      <div>
        <iframe
        title="Incubation Centre"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1379.6779171047665!2d75.88115417653576!3d22.681357689053147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd9409f98247%3A0x186d37397488435f!2sCentre%20for%20Distance%20and%20Online%20Education%20(CDOE)%2C%20DAVV!5e0!3m2!1sen!2sin!4v1703575585445!5m2!1sen!2sin"
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
