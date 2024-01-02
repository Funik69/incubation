import React, {useEffect , useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDataContext } from '../../context/DataContext'
import axios from 'axios'
import { MYURL } from '../../../env'

const Singlepage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const tokenData = localStorage.getItem("auth");
  const val = JSON.parse(tokenData)
  //const mail=val.user.email;
  const mail = val && val.user ? val.user.email : '';
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${MYURL}api/v1/auth/user/${mail}`);
        const adminStatus = response.data.user.userType === 'Admin';
        setIsAdmin(adminStatus);

        // ... (existing code)
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error accordingly, e.g., redirect to login page or display an error message
      }
    };

    fetchData();
  }, []);

    const {id} = useParams();
    const {data}=useDataContext();
    const filteredData = data.filter((i)=> i._id == id);
    const navigate = useNavigate();
    const handleUnRegister = async () => {
      try {
        await axios.put(`${MYURL}api/v1/data/inactive/${id}`)
        .then((res) => location.reload());
        const updatedData = data.map((item) =>
          item._id == id ? { ...item, status: 'Inactive' } : item
        );
        setData(updatedData);
        navigate('../acceptedIdea')
      } catch (error) {
        console.error('Error in unregistering the startup');
      }
    };
    const handleReRegister = async () => {
      try {
        await axios.put(`${MYURL}api/v1/data/updatedata/${id}`)
        .then((res) => location.reload());
        const updatedData = data.map((item) =>
          item._id == id ? { ...item, status: 'accepted' } : item
        );
        setData(updatedData);
        navigate('../inactive')
        
      } catch (error) {
        console.error('Error re-registering the startup');
      }
    };
  return (
    <div>
    {filteredData.map(item => (
    <div className='cardData' key={item._id}>
    <div className='portCover'><h1>{item.startupName}</h1></div>
      <div className='card-item'><strong>Founder Name:</strong> {item.founderName}</div>
      <div className='card-item'><strong>Mobile Number:</strong> {item.mobileNumber}</div>
      <div className='card-item'><strong>Alternate Number:</strong> {item.alternateNumber}</div>
      <div className='card-item'><strong>Email:</strong> {item.email}</div>
      <div className='card-item'><strong>Location:</strong> {item.location}</div>
      <div className='card-item'><strong>State:</strong> {item.state}</div>
      <div className='card-item'><strong>Institute:</strong> {item.instituteName}</div>
      <div className='card-item'><strong>Mentor Name:</strong> {item.mname}</div>
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
        {isAdmin &&
          item.status=="accepted"?(<div className='decisionButton'>
            <button className='Abtn' onClick={handleUnRegister}>UnRegister</button>
          </div>):(<p></p>)
        }
        {isAdmin &&
          item.status=="Inactive"?(<div className='decisionButton'>
            <button className='Abtn' onClick={handleReRegister}>Re-Register</button>
          </div>):(<p></p>)
        }
    </div>
  ))}
</div>
  )
}

export default Singlepage