import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import './Acceptedidea.css';
import { useDataContext } from '../../context/DataContext';
const Acceptedidea = () => {
    const { data } = useDataContext();
    const filteredData = data.filter((i) => i.status == "accepted");
    return (
      <>
      <div className='portCover'>
      <h1>List of Registered Startups</h1>
      </div>
       <div className='usrData'>
        {filteredData.map(item => (
          <div className='cardData' key={item._id}>
            <div className='card-item'><strong>Startup Name:</strong> {item.startupName}</div>
            <div className='card-item'><strong>Founder Name:</strong> {item.founderName}</div>
            <div className='card-item'><strong>Mobile Number:</strong> {item.mobileNumber}</div>
            <div className='card-item'><strong>Alternate Number:</strong> {item.alternateNumber}</div>
            <div className='card-item'><strong>Email:</strong> {item.email}</div>
            <div className='card-item'><strong>Location:</strong> {item.location}</div>
            <div className='card-item'><strong>State:</strong> {item.state}</div>
            <div className='card-item'><strong>Pincode:</strong> {item.pinCode}</div>
            <div className='card-item'><strong>Business Idea:</strong> {item.businessIdea}</div>
            <div>
              <a href={item.businessModelFile} target="_blank" rel="noopener noreferrer">
                Link to Business Model
              </a>
            </div>
            <div className='card-item'><strong>Why Join Us:</strong> {item.whyJoinUs}</div>
            <div className='card-item'><strong>Registered:</strong> {item.registered}</div>
            <div className='card-item'><strong>Development:</strong> {item.development}</div>
            <div className='card-item'><strong>Successful:</strong> {item.successful}</div>
              <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <hr></hr>
          </div>
        ))}
      </div>
      </>
     
    )
}

export default Acceptedidea