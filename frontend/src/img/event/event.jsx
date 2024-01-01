import React, { useState , useEffect} from 'react';
import sides from '../img/sideimg.jpg';
import audiimg from '../img/audiimg.jpg';
import './event.css';
function Event() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <div className='eventCover'>
                <h1>Events</h1>
            </div>
        <div className='eventmain'>
            <div className='eventinfo'>
                <h3>Indian Innovation Programme</h3>
                <h4>Bootcamp  | Offline</h4>
                <p className='eventp'>Being hosted as part of the INDIAN INNOVATION SUMMIT by FITT - Foundation for Innovation and Technology. It would be a great event which will be full of amazing knowledge and hand full of experience by diving deep into the world of technology.  
                </p><br></br>
                <button className='eventb'>"Register here"</button>
            </div>
            <div className='eventimg'>
                <img src={audiimg} style={{width: 300, height: 250}}></img>
                <h2>13 March | 11:00 AM</h2>
            </div>
        </div>
        <div className='eventmain'>
        <div className='eventinfo'>
                <h3>Indian Innovation Programme</h3>
                <h4>Bootcamp  | Offline</h4>
                <p className='eventp'>Being hosted as part of the INDIAN INNOVATION SUMMIT by FITT - Foundation for Innovation and Technology. It would be a great event which will be full of amazing knowledge and hand full of experience by diving deep into the world of technology.  
                </p><br></br>
                <button className='eventb'>"Register here"</button>
            </div>
            <div className='eventimg'>
                <img src={audiimg} style={{width: 300, height: 250 }}></img>
                <h2>20 December | 02:00 PM</h2>
            </div>
        </div>
    </div>
        );
    }
    export default Event;