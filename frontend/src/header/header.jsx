import React, { useState , useEffect} from 'react';
import {FaUser} from 'react-icons/fa';
import {LuLogIn} from 'react-icons/lu';
import { useAuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import clglogo from '../img/ietdavv.logo.jpg';
import incubationlogo from '../img/inculogo.png';
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
                <a href='/' className='headerlist'>
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href='./about' className='headerlist'>
                  <b>About Us</b>
                </a>
              </li>
              <li>
                <a href='./programs' className='headerlist'>
                  <b>Programs</b>
                </a>
              </li>
              <li>
                <a href='./event' className='headerlist'>
                  <b>Event</b>
                </a>
              </li>
              <li>
                <a href='./portfolio' className='headerlist'>
                  <b>Portfolio</b>
                </a>
              </li>
              <li>
                <a href='./contact' className='headerlist'>
                  <b>Contact</b>
                </a>
              </li>
              {name ? (
                filteredData.map((i) => (
                  <li key={i._id}>
                    {
                      (i.userType === 'Admin' || i.userType === 'coadmin') ? (
                        <NavLink to="/admindash" style={{ color: 'black' }}>
                          <b><h3><FaUser size={18} /> {i.fname}</h3></b>
                        </NavLink>
                      ) : (
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
