import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './admindash.css'
import Profile_pic from '../../img/ietdavv.logo.jpg'
import { useAuthContext } from '../../context/AuthContext'
import { MYURL } from '../../../env'

const Admindash = () => {
  const [isAdmin, setIsAdmin] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const tokenDatad = localStorage.getItem("auth");
  const valt = JSON.parse(tokenDatad)
  //const mail=val.user.email;
  const mails = valt && valt.user ? valt.user.email : '';
    const fetchData = async () => {
      try {
        const response = await axios.get(`${MYURL}api/v1/auth/user/${mails}`);
        const objj = response.data.user.perm;
        setIsAdmin(objj);

      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error accordingly, e.g., redirect to login page or display an error message
      }
    };

    fetchData();
  }, []);

  const {data} = useAuthContext();
  const tokenData = localStorage.getItem("auth");
  const val = JSON.parse(tokenData)
  //const mail=val.user.email;
  const mail = val && val.user ? val.user.email : '';
  const filteredData = data.filter((i) => i.email == mail);
  const logout = () => {
    localStorage.removeItem("auth");
};
const response = axios.get(`${MYURL}api/v1/auth/user/${mail}`);

  return (
    <div className='ad1'>
    <div className='admin_info'>
    <div className='admin_center'>
    {
      filteredData.map(i =>(
        <div key={i._id}>
          <ul>
        <li>
            <img src={Profile_pic} id='admin_pic' alt='Admin_Profile_Pic'></img>
        </li>
        <li>
             <h2>{i.fname} {i.lname}</h2><br></br>
        </li>
        <li>
             <h3>{i.email}</h3>
        </li>
    </ul> 
        </div>
      ))
    }
    </div>

    <div className='logout_btn1'>
    <button className='logout_btn' onClick={logout}><a href='./'>Logout</a></button>
    </div>
    </div>
    
    <div className='admin_details'>
        {isAdmin && isAdmin.one == '0'?(<p></p>):(<div className='card_block'>
        <Link to={`/fetch`}>StartUps Data List</Link>
        </div>)}
        {isAdmin && isAdmin.two == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/acceptedIdea'>Accepted Startups List</Link>
        </div>)}
        {isAdmin && isAdmin.three == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/inactive'>Inactive Startups</Link>
        </div>)}
        {isAdmin && isAdmin.four == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/userlist'>Applicant Profile</Link>
        </div>)}
        {isAdmin && isAdmin.five == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/eventform'>Create Event</Link>
        </div>)}
        {isAdmin && isAdmin.six == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/notices'>Announcements</Link>
        </div>)}
        {isAdmin && isAdmin.seven == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/mentorlist'>Mentor List</Link>
        </div>)}
        {isAdmin && isAdmin.eight == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/investorlist'>Investor List</Link>
        </div>)}
        {isAdmin && isAdmin.nine == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/mentor_application'>Mentor Proposals</Link>
        </div>)}
        {isAdmin && isAdmin.ten == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/investor_application'>Investor Proposals</Link>
        </div>)}
        {isAdmin && isAdmin.eleven == '0'?(<p></p>):(<div className='card_block'>
        <Link to='/coadmin'>Make Co-Admin</Link>
        </div>)}

    </div>
    </div>
  )
}

export default Admindash