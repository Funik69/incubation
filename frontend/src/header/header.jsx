import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clglogo from '../img/ietdavv.logo.jpg';
import incubationlogo from '../img/inculogo.png';
import './header.css';
function Portfolio() {
return (
    <div className="main"> 
        <div className="container">
          <a href="/">
            <img src={clglogo} className="logo1" height={100} width={100}/>
          </a>
          <a href="/">
            <img src={incubationlogo} className="logo2" height={100} width={100}/>
          </a>
          <div className="connect">
            <ul className="links">
              <li> 
                <a href='/'>
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href='./about'>
                  <b>About Us</b>
                </a>
              </li>
              <li> 
                <a href='./programs'>
                  <b>Programs</b>
                </a>
              </li>
              <li> 
                <a href='./event'>
                  <b>Event</b>
                </a>
              </li>
              <li>
                <a href='./portfolio'>
                  <b>Portfolio</b>
                </a>
              </li>
              <li>
                <a href='./contact'>
                  <b>Contact</b>
                </a>
              </li>
              {/* <li>
                <a href='./login'>
                  <b>Login</b>
                </a>
              </li>
              <li>
                <a href='./register'>
                  <b>Register</b>
                </a>
              </li> */}
              <li>
                <a href='./login'>
                <b style={{color:'white'}}>Login</b>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
    );
}
export default Portfolio;