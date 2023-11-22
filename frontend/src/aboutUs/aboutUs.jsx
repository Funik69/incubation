import React, { useState , useEffect} from 'react';
import mainpic from '../img/incubation.logo.png';
import sides from '../img/sideimg.jpg';
import backi from '../img/aboutUsbg.jpg';
import './aboutUs.css';
function About() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
return (
    <div>
        <div className='aboutcover'>
            <h1>About</h1>
        </div>
        <div className="title-outer">
            <div className="title-image"></div>
            <div className="title-textbox">
                <div className="title-text">
                    <h2 className='headincub'>Incubation Center</h2>
                </div>
            </div>
        </div>
        <div className='aboutmain'>
            <div className='aboutinfo'>
                <h1>About Us</h1>
                <p>The Incubation Centre (IC) at DAVV is a result of collaboration between the Government of India (47%) and the Government of Madhya Pradesh (53%). This is an INR 47.10 Crore project associated with the MAKE IN INDIA initiative.<br /><br />The Incubation Centre is specifically focussed on incubating ventures in various domains and provide them the guidance and support in the best possible manner. We provide world-class facilities for design, testing, prototyping and fabrication. The objective is to ensure that for ideas in any domain, the IC-DAVV is the place to turn the idea into reality.<br /> <br /> It is a registered as IC-DAVV society under Society Act.
                </p>
            </div>
            <div className='aboutimg'>
                <img src={sides} style={{width: 500, height: 500, borderRadius: 500/2}}></img>
            </div>
        </div>
        <div className='aboutsec'>
            <div className='aboutinfo'>
                <h1>VISION</h1>
                <p>Be the leading technology business incubator in the country for the development of Small Scale Startups along with the growing firms to reach great heights.</p>
            </div>
            <div className='aboutinfo1'>
                <h1>OBJECTIVE</h1>
                <p>Identify, nurture and translate technology ideas and innovation in the various domains with a focus on working as a helping hand for the Incubatees.<br /><br />Be a stepping stone for the growth of entrepreneurship activities in the geographical region.<br /><br />Give impetus to entrepreneurship among interested students, faculties and external innovators.
                </p>
            </div>
        </div>
    </div>
    );
}
export default About;