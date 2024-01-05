import React, { useState , useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import { useInvestorContext } from '../../context/InvestorContext';

import { MYURL } from '../../../env';
import axios from 'axios';
const ViewInvestorFullPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const { id } = useParams();
  const { data, setData } = useInvestorContext();
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
       await axios.put(`${MYURL}api/v1/invest/updatedata/${id}`);
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
      await axios.delete(`${MYURL}api/v1/invest/deletedata/${id}`);
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
      console.log(updatedData);
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
        <div className='portCover'><h1>{item.investorName}</h1></div>
          <div className='card-item'><strong>City:</strong> {item.icity}</div>
          <div className='card-item'><strong>State:</strong> {item.istate}</div>
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
                agree && <button className="Abtn" onClick={confirmAccept}><Link to='/investor_application'>Accept</Link></button> }
              { disagree &&  <button className="Rbtn" onClick={confirmReject}><Link to='/investor_application'>Reject</Link></button>
              }
            </div>
          )}
          </div>
      ))}
    </div>
  )
}

export default ViewInvestorFullPage