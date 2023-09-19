import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import startimg from '../img/FrontImage.logo.png';
import About from '../aboutUs/aboutUs';
import Programs from '../programs/programs';
import Event from '../event/event';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
function Home() {
  const navigate = useNavigate();
return (
    <div> 
      <div class="landing-page">
        <div class="content">
          <div class="container">
            <div class="info">
              <h1>WE <br/>INCUBATE/INNOVATE/SUPPORT</h1>
              <p>Incubation centres play a pivotal role as institutions offering an array of essential business and technical support services.</p>
              <p>With this intent in mind, we are inclined towards offering a effective solution for all the startups in the best possible manner.</p>
              <button onClick={() => navigate("/StartupForm")}><b>Apply Now</b></button>
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