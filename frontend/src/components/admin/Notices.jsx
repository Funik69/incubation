import React,{useState} from 'react'
import { useAlertContext } from '../../context/AlertContext'
import axios from 'axios';
import { MYURL } from '../../../env';

const Notices = () => {
    const {alert} = useAlertContext();
    const defMsg = alert?alert.alertmsg:"Enter Message";
    const defInfo = alert?alert.latestinfo:"Enter Message";
    const [selectedOption, setSelectedOption] = useState('');
    const [message, setMessage] = useState('');
    const [loading , setLoading] = useState(false);

    
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if(selectedOption == 'latestinfo') setMessage(defMsg);
    if(selectedOption == 'alertmsg') setMessage(defInfo);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    // console.log('Selected Option:', selectedOption);
    // console.log('Message:', message);
    try{
      const res = await axios.put(`${MYURL}api/v1/auth/updateinformed`,{
        selectedOption,
        message,
      }).then((res) =>{
        location.reload();
      })
      setSelectedOption('');
      setMessage('');
      console.log('Alert updated');
    }catch(error){
      console.log('error in updating alert');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className='myform' style={{minHeight:'50vh'}}>
    <form onSubmit={handleSubmit}>
      <div>
  <label htmlFor="options">Choose Edit Field:</label><br></br>
  <select
    id="options"
    value={selectedOption}
    onChange={handleOptionChange}
    className='form-control'
  >
    <option value="alertmsg">Edit Home Alert</option>
    <option value="latestinfo">Edit Program Alert</option>
  </select>
</div>
      <div>
        <label>
          Message:
          <br></br>
          <textarea
            type="text"
            value={message}
            onChange={handleMessageChange}
            className='form-control'
            style={{height:'111px'}}
          />
        </label>
      </div>
      <button type="submit" className='auth-btn'>{loading?'Updating..':'Update'}</button>
    </form>
    </div>
  );
}

export default Notices