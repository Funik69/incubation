import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { useInvestorContext } from '../context/InvestorContext';

 function Investordash(){
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const tokenData = localStorage.getItem("auth");
    const val = JSON.parse(tokenData);
    // const id = val.user.email;
    const id = val && val.user ? val.user.email : '';
    const { data } = useInvestorContext();
  const filteredData = data.filter((item) => item.iemail == id);
  const len = filteredData.length;
  return (
    <div className='outeruser'>
    <div className='portCover'> <h1>My Application({len})</h1></div>
    <div className='showdata'>{
      filteredData.map(i=>(
        <div className='cardData' key={i._id}>
        <p className='userdashp'><b>Investor Name :</b> {i.investorName} </p>
        <p className='userdashp'><b>Company Name :</b> {i.companyName} </p>
        <p className='userdashp'><b>City :</b> {i.icity} </p>
        <p className='userdashp'><b>State : </b>{i.istate} </p>
        <p className='userdashp'><b>Email :</b> {i.iemail} </p>
        <p className='userdashp'><strong>Mobile No. :</strong> {i.imobile}</p>
        <p className='userdashp'><strong>Investing Company:</strong> {i.investInto}</p>
        <p className='userdashp'><b>Limit of Investment :</b> {i.limit} </p>
        <p className='userdashp'><b>Linkedin Profile :</b><a href={i.linkedin} target="_blank" rel="noopener noreferrer">
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

export default Investordash;