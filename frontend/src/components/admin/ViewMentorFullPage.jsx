import React, { useState , useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import { useMentorContext } from '../../context/MentorContext';
import { MYURL } from '../../../env';
import axios from 'axios';
const ViewMentorFullPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const { id } = useParams();
  const { data, setData } = useMentorContext();
  const filteredData = data.filter((i) => i._id == id);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [agree,setAgree] = useState(false);
  const [disagree, setDisagree] = useState(false);
  const handleAccept = async () => {
    // Display the confirmation dialog
    setShowConfirmation(true);
    setAgree(true);
  };
  const confirmAccept = async () => {
    try {
       await axios.put(`${MYURL}api/v1/mentor/updatedata/${id}`);
      const updatedData = data.map((item) =>
        item._id === id ? { ...item, status: 'accepted' } : item
      );
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }

    // Close the confirmation dialog
    setShowConfirmation(false);
    setAgree(false);
  };

  const handleReject = async () => {
    // Display the confirmation dialog
    setShowConfirmation(true);
    setDisagree(true);
  };
  const confirmReject = async () => {
    try {
      await axios.put(`${MYURL}api/v1/mentor/deletedata/${id}`);
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }

    // Close the confirmation dialog
    setShowConfirmation(false);
    setDisagree(false);
  };

  return (
    <div>
     {filteredData.map((item) => (
        <div className="cardData" key={item._id}>
        <div className='portCover'><h1>{item.mname}</h1></div>
          <div className='card-item'><strong>City:</strong> {item.mcity}</div>
          <div className='card-item'><strong>State:</strong> {item.mstate}</div>
          <div className='card-item'><strong>Email:</strong> {item.memail}</div>
          <div className='card-item'><strong>Contact Number:</strong> {item.mmobile}</div>
          <div className='card-item'><strong>Company Name:</strong> {item.mconame}</div>
          <div className='card-item'><strong>Years of Experience:</strong> {item.myear}</div>
          <div className='card-item'><strong>Sector:</strong> {item.msector}</div>
          <div className='card-item'><strong>Link:</strong> {item.mlink}</div>
          <hr></hr>
            
            {
              !showConfirmation?(<div className="decisionButton">
            <button className="Abtn" onClick={handleAccept}>
              Accept
            </button>
            <button className="Rbtn" onClick={handleReject} >
              Reject
            </button>
          </div>):(<p></p>)
            }

          {showConfirmation && (
            <div className="confirmation-dialog">
              <p><b>Are you sure you want to proceed?</b></p>{
                agree && <button className="Abtn" onClick={confirmAccept}><Link to='/mentor_application'>Accept</Link></button> }
              { disagree &&  <button className="Rbtn" onClick={confirmReject}><Link to='/mentor_application'>Reject</Link></button>
              }
            </div>
          )}
          </div>
      ))}
    </div>
  )
}

export default ViewMentorFullPage
