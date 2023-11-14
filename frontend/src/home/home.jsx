import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './home.css';
import startimg from '../img/coverpic.png';
import About from '../aboutUs/aboutUs';
import Programs from '../programs/programs';
import Event from '../event/event';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import axios from 'axios';
function Home() {
  const navigate = useNavigate();
  
return (
    <div> 

    <div className='scrltext'>
      <marquee direction="left" height="100px" scrollmount="100">
      Incubation centres play a pivotal role as institutions offering an array of essential business and technical support services. These encompass initial seed funding, invaluable networking prospects, well-equipped laboratory facilities, and expert advisory services.
      </marquee>
    </div>

      <div className="landing-page">
        <div className="content">
          <div className="container">
            <div className="info">
              <TypeAnimation
                    sequence={["We Incubate",1000,"We Support",1000,"We Innovate",1000]}
                    speed={50}
                    repeat={4}
                    style={{ fontSize: '70px', fontWeight: '800', color: '#0d0254'}}
                    className='animationhereh'
                />
              <p>Incubation centres play a pivotal role as institutions offering an array of essential business and technical support services.</p>
              <p>With this intent in mind, we are inclined towards offering a effective solution for all the startups in the best possible manner.</p>
              <button onClick={() => navigate("/Eligibility")} className='firstbut'><b>Apply For Incubation</b></button>
              <button onClick={() => navigate("/Collaborate")} className='secondbutton'><b>Collaborate here</b></button>
            </div>
            <div className="image">
                <img src={startimg} height={300} width={450} />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Programs />
      <Event />
      <Portfolio />
      <Contact />
    </div>
    );
}
export default Home;