import React, { useState , useEffect} from 'react';
import sides from '../img/sideimg.jpg';
import audiimg from '../img/audiimg.jpg';
import calendar from '../img/calendar.jpg';
import './event.css';
import axios from 'axios';
function Event() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        axios.get('http://localhost:8000/api/v1/event/getallevents') // Replace with your actual server endpoint
      .then((response) => setEvents(response.data.events))
      .catch((error) => console.error('Error fetching events:', error));
      }, []);

      const [scrollAmount, setScrollAmount] = useState(5);

  const handleMouseOver = () => {
    setScrollAmount(0);
  };

  const handleMouseOut = () => {
    setScrollAmount(2);
  };
    return (
        <div>
            <div className='eventCover'>
                <h1>Events</h1>
            </div>
            <div className='eventmhead'>
                <img src={calendar} className='calenimg'></img>
                <h1> Mark your Calendar for these events :- </h1>
            </div>
            <div className='elist'>
            <marquee behavior="" onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      scrollamount={scrollAmount} direction='up' height='300px'>
                {events.map((event, index) => (
                <div className='eventname' key={index}>
                    <h2>
                    <a href={event.eventlink} target='_blank'>
                        <span className='multicolortext'>{event.eventname}</span>
                    </a>
                    </h2>
                </div>
                ))}
            </marquee>
        </div>
        {/*<div className='eventmain'>
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
    </div>*/}
    </div>
        );
    }
    export default Event;