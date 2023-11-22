import React, { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import axios from 'axios';

const FullPage = () => {
  const { id } = useParams();
  const { data, setData } = useDataContext();
  const filteredData = data.filter((i) => i._id == id);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [agree,setAgree] = useState(false);
  const [disagree, setDisagree] = useState(false);

  const handleAccept = async () => {
    // Display the confirmation dialog
    setShowConfirmation(true);
    setAgree(true);
  };

  const handleReject = async () => {
    // Display the confirmation dialog
    setShowConfirmation(true);
    setDisagree(true);
  };

  const confirmAccept = async () => {
    try {
      await axios.put(`http://localhost:8000/api/v1/data/updatedata/${id}`);
      const updatedData = data.map((item) =>
        item._id === id ? { ...item, status: 'accepted' } : item
      );
      setData(updatedData);
    } catch (error) {
      console.error('Error accepting the startup');
    }

    // Close the confirmation dialog
    setShowConfirmation(false);
    setAgree(false);
  };

  const confirmReject = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/data/deletedata/${id}`);
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error rejecting the startup');
    }

    // Close the confirmation dialog
    setShowConfirmation(false);
    setDisagree(false);
  };

  return (
    <div>
      {filteredData.map((item) => (
        <div className="cardData" key={item._id}>
        <div className='portCover'><h1>{item.startupName}</h1></div>
          <div className='card-item'><strong>Founder Name:</strong> {item.founderName}</div>
          <div className='card-item'><strong>Mobile Number:</strong> {item.mobileNumber}</div>
          <div className='card-item'><strong>Alternate Number:</strong> {item.alternateNumber}</div>
          <div className='card-item'><strong>Email:</strong> {item.email}</div>
          <div className='card-item'><strong>Location:</strong> {item.location}</div>
          <div className='card-item'><strong>State:</strong> {item.state}</div>
          <div className='card-item'><strong>Pincode:</strong> {item.pinCode}</div>
          <div className='card-item'><strong>Business Idea:</strong> {item.businessIdea}</div>
          <div>
          <strong>Business Model : </strong><a href={item.businessModelFile} target="_blank" rel="noopener noreferrer">
              Link
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
            
            {
              !showConfirmation?(<div className="decisionButton">
            <button className="Abtn" onClick={handleAccept}>
              Accept
            </button>
            <button className="Rbtn" onClick={handleReject}>
              Reject
            </button>
          </div>):(<p></p>)
            }

          {showConfirmation && (
            <div className="confirmation-dialog">
              <p><b>Are you sure you want to proceed?</b></p>{
                agree && <button className="Abtn" onClick={confirmAccept}><Link to='/fetch'>Accept</Link></button> }
              { disagree &&  <button className="Rbtn" onClick={confirmReject}><Link to='/fetch'>Reject</Link></button>
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FullPage;
