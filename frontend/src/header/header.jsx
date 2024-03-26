import React, { useState , useEffect} from 'react';
import {FaUser} from 'react-icons/fa';
import {FaCaretDown } from 'react-icons/fa';
import {LuLogIn} from 'react-icons/lu';
import { useAuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import clglogo from '../img/ietdavv.logo.jpg';
import incubationlogo from '../img/inculogo.png';
import dropdown from '../img/dropdown.png';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';

function Header() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const name = localStorage.getItem('auth');
  const tokenData = JSON.parse(name);
  const mail = tokenData?.user?.email;
  const { data } = useAuthContext();
  const filteredData = data.filter((i) => i.email === mail);

  return (
    <div className="main">
      <div className="container">
        <a href="/">
          <img src={clglogo} className="logo1" height={100} width={100} alt="Logo1" />
        </a>
        <a href="/">
          <img src={incubationlogo} className="logo2" height={100} width={100} alt="Logo2" />
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
                <NavLink to='/' className='headerlist'>
                  <b>Home</b>
                </NavLink>
              </li>
              <li>
                <NavLink to='./about' className='headerlist'>
                  <b>About Us</b>
                </NavLink>
              </li>
              <li>
                <NavLink to='./programs' className='headerlist'>
                  <b>Programs</b>
                </NavLink>
              </li>
              <li>
                <NavLink to='./event' className='headerlist'>
                  <b>Event</b>
                </NavLink>
              </li>
              <li>
                <div class="dropdown">
                  <div className='dropdiv'>
                    <b>Portfolio</b>
                    <img src={dropdown} alt='Image' className='dropdownimg'></img>
                  </div>
                  <div class="dropdown-content">
                    <a href="./portfolio"><b>Startup Portfolio</b></a>
                    <a href="./mentorpfolio"><b>Mentor Portfolio</b></a>
                  </div>
                 </div>
              </li>
              <li>
                <NavLink to='./contact' className='headerlist'>
                  <b>Contact</b>
                </NavLink>
              </li>
              {name ? (
                filteredData.map((i) => (
                  <li key={i._id}>
                    {
                      (i.userType === 'Admin' || i.userType === 'coadmin') ? (
                        <NavLink to="/admindash" style={{ color: 'black' }}>
                          <b><h3><FaUser size={18} /> {i.fname}</h3></b>
                        </NavLink>
                      ) : (i.userType === 'mentor') ? (
                        <NavLink to="/mentordash" style={{color: 'black'}}>
                          <b><h3><FaUser size={18} /> {i.fname}</h3></b>
                        </NavLink> 
                      ) : (i.userType === 'investor') ? (
                        <NavLink to="/investordash" style={{color: 'black'}}>
                          <b><h3><FaUser size={18} /> {i.fname}</h3></b>
                        </NavLink> 
                      ) : 
                      (
                        <NavLink to="/userdash" style={{ color: 'black' }}>
                          <b><h3><FaUser size={18} /> {i.fname}</h3></b>
                        </NavLink>
                      )
                    }
                  </li>
                ))
              ) : (
                <li><LuLogIn size={20}/>
                  <NavLink to='./login'>
                    <b className='loginbut'>Login</b>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
