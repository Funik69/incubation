import React from 'react'
import './admindash.css'
import Profile_pic from '../../img/ietdavv.logo.jpg'
import { useAuthContext } from '../../context/AuthContext'

const Admindash = () => {
  const {data} = useAuthContext();
  const tokenData = localStorage.getItem("auth");
  const val = JSON.parse(tokenData)
  //const mail=val.user.email;
  const mail = val && val.user ? val.user.email : '';
  const filteredData = data.filter((i) => i.email == mail);
  const logout = () => {
    localStorage.removeItem("auth");
};
  return (
    <div className='ad1'>
    <div className='admin_info'>
    <div className='admin_center'>
    {
      filteredData.map(i =>(
        <div key={i._id}>
          <ul>
        <li>
            <img src={Profile_pic} id='admin_pic'></img>
        </li>
        <li>
             <h2>{i.fname}</h2><br></br>
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
        <div className='card_block'>
        <a href='/fetch'>StartUp Data List</a>
        </div>
        <div className='card_block'>
        <a href='/acceptedIdea'>Accepted Startup List</a>
        </div>
        <div className='card_block'>
        <a href='/userlist'>User List</a>
        </div>
    </div>
    </div>
  )
}

export default Admindash