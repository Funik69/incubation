import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clglogo from '../img/ietdavv.logo.jpg';
import incubationlogo from '../img/incubation.logo.png';
import './header.css';
function Portfolio() {
return (
    <div class="main"> 
        <div class="container">
          <a href="/">
            <img src={clglogo} className="logo1" height={100} width={100}/>
          </a>
          <a href="/">
            <img src={incubationlogo} className="logo2" height={100} width={100}/>
          </a>
          <div class="connect">
            <ul class="links">
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
              <li><b>Apply Now</b></li>
            </ul>
          </div>
      </div>
    </div>
    );
}
export default Portfolio;