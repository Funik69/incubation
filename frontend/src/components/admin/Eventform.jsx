import React , {useState , useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Eventform.css';

const eventData_initialState = {
  eventname: "",
  eventlink: "",
};

function Eventform() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(eventData_initialState)

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === "checkbox" ? checked : files ? files[0] : value;

    setEventData({
      ...eventData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/event/saveevent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });

      if(response.status === 200) {
        setEventData(eventData_initialState)
      }

      if (response.ok) {
        console.log('Form data sent successfully');
      } else {
        console.error('Form data failed to send');
      }
    } catch (error) {
        console.error('Error:', error);
    }
    alert("Event Created Successfully");
    navigate('/admindash');
    setEventData(eventData_initialState);
};
  return (
    <div>
      <h1 className="eventfhead">Event Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="eventfmain">
          <label htmlFor="eventname" className="eventfl1"><b>Name of Event : </b></label>
          <br></br>
          <input type="text" id="eventname" name="eventname" placeholder="Enter name of event" onChange={handleChange} className="eventfinp" />
          <br></br>
          <br></br>
          <label htmlFor="eventlink" className="eventfl1"><b>Link to Event Description : </b></label>
          <br></br>
          <input type="text" id="eventlink" name="eventlink" placeholder="Enter link (only drive link) to event description pdf"  onChange={handleChange} className="eventfinp" />
          <br></br>
          <br></br>
          <button type="submit" className="eventfbut"><b>Create Event</b></button>
        </div>
      </form>
    </div>
  );
}
export default Eventform;
