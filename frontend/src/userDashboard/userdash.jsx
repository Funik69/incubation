import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import './userdash.css';
import { useDataContext } from '../context/DataContext';
 function Userdash(){
    const tokenData = localStorage.getItem("auth");
    const val = JSON.parse(tokenData);
    // const id = val.user.email;
    const id = val && val.user ? val.user.email : '';
    const { data } = useDataContext();
  const filteredData = data.filter((item) => item.email == id);
  const len = filteredData.length;
  return (
    <div className='outeruser'>
    <div className='portCover'> <h1>My Startup Application({len})</h1></div>
    <div className='showdata'>{
      filteredData.map(i=>(
        <div className='cardData' key={i._id}>
        <p className='userdashp'><b>Startup Name :</b> {i.startupName} </p>
        <p className='userdashp'><b>Founder Name :</b> {i.founderName} </p>
        <p className='userdashp'><b>Email :</b> {i.email} </p>
        <p className='userdashp'><b>Mobile Number : </b>{i.mobileNumber} </p>
        <p className='userdashp'><b>Alternate Number :</b> {i.alternateNumber} </p>
        <p className='userdashp'><b>Location :</b> {i.location} </p>
        <p className='userdashp'><b>State :</b> {i.state} </p>
        <p className='userdashp'><b>Pin Code :</b> {i.pinCode} </p>
        <p className='userdashp'><b>Business Idea :</b> {i.businessIdea} </p>
        <p className='userdashp'><b>Business Model File :</b><a href={i.businessModelFile} target="_blank" rel="noopener noreferrer">
              Link
            </a> </p>
        <p className='userdashp'><b>Why Join Us :</b> {i.whyJoinUs} </p>
        <p className='userdashp'><b>Registered? :</b> {i.registered} </p>
        <p className='userdashp'><b>Successful :</b> {i.successful} </p>
        <p className='userdashp'><b>Linkedin Profile :</b><a href={i.linkedinProfile} target="_blank" rel="noopener noreferrer">
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

export default Userdash;