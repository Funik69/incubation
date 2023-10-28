import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import './userdash.css';
 function Userdash(){
    const [data,setData] = useState([]);
    const id =  "653a66aa983b2ac8198457e5 ";
    useEffect(()=>{ 
        axios.get(`http://localhost:8000/api/v1/data/getsingledata/${id}`)
        .then(response =>{
            setData(response.data);
        })
        .catch(error=>{
            console.error(error);
        });
    },[]); 
  return (
    <div className='outeruser'>
      <h1 className='headuserdash'>Startup Name : {data.startupName}</h1>
      <div className='inneruser'>
        <p className='userdashp'><b>Founder Name :</b> {data.founderName} </p>
        <p className='userdashp'><b>Mobile Number : </b>{data.mobileNumber} </p>
        <p className='userdashp'><b>Alternate Number :</b> {data.alternateNumber} </p>
        <p className='userdashp'><b>Location :</b> {data.location} </p>
        <p className='userdashp'><b>State :</b> {data.state} </p>
        <p className='userdashp'><b>Pin Code :</b> {data.pinCode} </p>
        <p className='userdashp'><b>Business Idea :</b> {data.businessIdea} </p>
        <p className='userdashp'><b>Business Model File :</b> {data.businessModelFile} </p>
        <p className='userdashp'><b>Why Join Us :</b> {data.whyJoinUs} </p>
        <p className='userdashp'><b>Registered? :</b> {data.registered} </p>
        <p className='userdashp'><b>Successful :</b> {data.successful} </p>
        <p className='userdashp'><b>Linkedin Profile :</b> {data.linkedinProfile} </p>
        <p className='userdashp'><b>Email :</b> {data.email} </p>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default Userdash;