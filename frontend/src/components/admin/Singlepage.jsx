import React , {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDataContext } from '../../context/DataContext'
import axios from 'axios'
const Singlepage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const {id} = useParams();
    const {data}=useDataContext();
    const filteredData = data.filter((i)=> i._id == id);
    const handleUnRegister = async () => {
      try {
        await axios.put(`http://localhost:8000/api/v1/data/inactive/${id}`);
        const updatedData = data.map((item) =>
          item._id == id ? { ...item, status: 'Inactive' } : item
        );
        setData(updatedData);
        
       
      } catch (error) {
        console.error('Error in unregistering the startup');
      }
    };
    const handleReRegister = async () => {
      try {
        await axios.put(`http://localhost:8000/api/v1/data/updatedata/${id}`);
        const updatedData = data.map((item) =>
          item._id == id ? { ...item, status: 'accepted' } : item
        );
        setData(updatedData);
        
      } catch (error) {
        console.error('Error re-registering the startup');
      }
    };
  return (
    <div>
    {filteredData.map(item => (
    <div className='cardData'>
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
      <strong>Business Model: </strong><a href={item.businessModelFile} target="_blank" rel="noopener noreferrer">
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
        <br></br><br></br>
        {
          item.status=="accepted"?(<div className='decisionButton'>
            <button className='Abtn' onClick={handleUnRegister}><Link to='/acceptedIdea'>UnRegister</Link></button>
          </div>):(<p></p>)
        }
        {
          item.status=="Inactive"?(<div className='decisionButton'>
            <button className='Abtn' onClick={handleReRegister}><Link to='/inactive'>Re-Register</Link></button>
          </div>):(<p></p>)
        }
    </div>
  ))}
</div>
  )
}

export default Singlepage