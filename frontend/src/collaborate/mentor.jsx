import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './mentor.css';
import mentor1 from '../img/mentor1.jpg';
import { useNavigate } from 'react-router-dom';
function Mentor() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='menthere'>
                
                <div className='mentdohere'>
                <TypeAnimation
                    sequence={["Mentor",1000," Mentors",1000,]}
                    speed={50}
                    repeat={4}
                    style={{ fontSize: '70px', fontWeight: '800', color: '#0d0254'}}
                    className='mentanimation'
                />
                </div>
                
                <div className='mentmain'>
                    <div className='mentinfo'>
                        <h2 className='menttopic'>"A mentor is someone who allows you to see the hope inside yourself." </h2>
                        <p className='mentpara'>Incubation Center, IET DAVV, established in 2017, is one of the supportive business and technology incubators promoting startups and social enterprises of every possible domain. We onboard startups and support innovators instrumental in contributing towards our vision to make India a global hub.</p>
                    </div>
                    <img src={mentor1} height='300px' width='500px' className='mentimg'></img>
                    
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
                <button className='mentbut'onClick={() => navigate("/MentorForm")}> <b>Apply here</b></button>
            </div>
        </div>
    );
}
export default Mentor;