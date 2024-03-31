import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Investors from '../img/investordp.jpg'
import { useAuthContext } from '../context/AuthContext'
import { useInvestorContext } from '../context/InvestorContext'

const Investorprofile = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
    return (
      <div className='ad1'>
      <div className='admin_info'>
      <div className='admin_center'>
      {
        filteredData.map(i =>(
          <div key={i._id}>
            <ul>
          <li>
              <br></br>
              <br></br>
              <img src={Investors} id='admin_pic' alt='User_Profile_Pic'></img>
          </li>
          <h2 >{i.user_id}</h2>
          <li>
               <h1 className='gotohere'>{i.fname} {i.lname}</h1>
          </li>
          <li>
               <h3 className='gotohere'>{i.email}</h3>
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
          <Link to={`/investorprofile`}>My Application</Link>
          </div>
      </div>
      </div>
    )
}

export default Investorprofile