import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { useMentorContext } from '../context/MentorContext';
 function Mentordash(){
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const tokenData = localStorage.getItem("auth");
    const val = JSON.parse(tokenData);
    // const id = val.user.email;
    const id = val && val.user ? val.user.email : '';
    const { data } = useMentorContext();
  const filteredData = data.filter((item) => item.memail == id);
  const len = filteredData.length;
  return (
    <div className='outeruser'>
    <div className='portCover'> <h1>My Application({len})</h1></div>
    <div className='showdata'>{
      filteredData.map(i=>(
        <div className='cardData' key={i._id}>
        <p className='userdashp'><b>Mentor Name :</b> {i.mname} </p>
        <p className='userdashp'><b>City :</b> {i.mcity} </p>
        <p className='userdashp'><b>State :</b> {i.mstate} </p>
        <p className='userdashp'><b>Email : </b>{i.memail} </p>
        <p className='userdashp'><b>Mobile No. :</b> {i.mmobile} </p>
        <p className='userdashp'><strong>Company Name:</strong> {i.mconame}</p>
        <p className='userdashp'><strong>Year of Experience:</strong> {i.myear}</p>
        <p className='userdashp'><b>Sector of Expertise :</b> {i.msector} </p>
        <p className='userdashp'><b>Linkedin Profile :</b><a href={i.mlink} target="_blank" rel="noopener noreferrer">
              View profile
            </a> </p>
        <p className='userdashp'><b>Application status :</b> {i.status} </p>
        <hr></hr>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Mentordash;