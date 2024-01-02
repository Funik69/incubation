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
import ColSlider from '../colslider/colslider';
import axios from 'axios';
import { useAlertContext } from '../context/AlertContext';
function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const navigate = useNavigate();
  const {alert} = useAlertContext();
  
return (
    <div> 

    <div className='scrltext'>
      <marquee direction="left" height="100px" scrollmount="100"> 
      <div dangerouslySetInnerHTML={{ __html: alert.alertmsg }} />;
      </marquee>
    </div>

      <div className="landing-page">
        <div className="content">
          <div className="container">
            <div className="info">
              <TypeAnimation
                    sequence={["We Incubate",1000,"We Support",1000,"We Innovate",1000]}
                    speed={50}
                    repeat={400}
                    // style={{fontWeight:800}}
                    className='animationhereh'
                />
              <p className='homep'>Incubation centres play a pivotal role as institutions offering an array of essential business and technical support services.</p>
              <p className='homep'>With this intent in mind, we are inclined towards offering a effective solution for all the startups in the best possible manner.</p>
              <button onClick={() => navigate("/Eligibility")} className='firstbut'><b>Apply For Incubation</b></button>
              <button onClick={() => navigate("/Collaborate")} className='secondbutton'><b>Collaborate here</b></button>
            </div>
            <div className="image">
                <img src={startimg} height={300} width={450} />
            </div>
          </div>
        </div>
      </div>
      <ColSlider/>
      <About />
      <Programs />
      <Event />
      <Portfolio />
      <Contact />
    </div>
    );
}
export default Home;