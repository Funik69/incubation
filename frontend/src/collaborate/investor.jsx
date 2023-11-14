import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './investor.css';
import meetingimg from '../img/meeting3.jpg';
import { useNavigate } from 'react-router-dom';
function Investor() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='herehere2'>
                
                <div className='dohereneed'>
                <TypeAnimation
                    sequence={["Investor",1000," Investors",1000,]}
                    speed={50}
                    repeat={4}
                    style={{ fontSize: '70px', fontWeight: '800', color: '#0d0254'}}
                    className='animationhere'
                />
                </div>
                
                <div className='maininvest'>
                    <div>
                        <h2 className='topichere'>"An investment in knowledge pays the best interest." </h2>
                        <p className='paraherein'>Incubation Center, IET DAVV, established in 2017, is one of the supportive business and technology incubators promoting startups and social enterprises of every possible domain. We onboard startups and support innovators instrumental in contributing towards our vision to make India a global hub.</p>
                    </div>
                    <img src={meetingimg} height='300px' width='500px' className='investhereimg'></img>
                    
                </div>
                <div>
                    <div>
                    <label className="lbl">
                        <input type="checkbox" name="ietDavvRights" required/>
                            You must adhere to terms and conditions.
                    </label>
                    </div>
                    <div>
                    <label className="lbl">
                        <input type="checkbox" name="ietDavvRights" required/>
                            You should follow all the guidelines.
                    </label>
                    </div>
                    <div>
                    <label className="lbl">
                        <input type="checkbox" name="ietDavvRights" required/>
                            All rights are reserved with IET-DAVV.
                    </label>
                    </div>
                </div>
                <button className='becomebut'onClick={() => navigate("/InvestForm")}> <b>Apply here</b></button>
            </div>
        </div>
    );
}
export default Investor;