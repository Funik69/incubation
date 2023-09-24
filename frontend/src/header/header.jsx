import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clglogo from '../img/ietdavv.logo.jpg';
import incubationlogo from '../img/inculogo.png';
import './header.css';
function Portfolio() {
  const [menuOpen,setMenuOpen] = useState(false);
return (
    <div class="main"> 
        <div class="container">
          <a href="/">
            <img src={clglogo} className="logo1" height={100} width={100}/>
          </a>
          <a href="/">
            <img src={incubationlogo} className="logo2" height={100} width={100}/>
          </a>
            <nav>
              <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
              }}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className='links'>
            <ul className={menuOpen ? "open" : ""}>
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
              <li>
                <a href='./StartupForm'>
                <b style={{color:'white'}}>Apply Now</b>
                </a>
              </li>
            </ul>
            </div>
            </nav>
      </div>
    </div>
    );
}
export default Portfolio;