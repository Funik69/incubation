import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';

const UserStartupview = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 const {data} = useDataContext();
 const { id } = useParams();
 const filteredData = data.filter((i)=> i.email == id)
 const len = filteredData.length;
  return (
    <div className='outeruser'>
      <div className='portCover'>
        <h1>{len} Register Startup</h1>
      </div>
      <div className='showdata'>
        {filteredData && len >0 ?  (
          filteredData.map((i) => (
            <div className='cardData' key={i._id}>
        <p className='userdashp'><b>Registartion no :</b> {i.sid} </p>
        <p className='userdashp'><b>Startup Name :</b> {i.startupName} </p>
        <p className='userdashp'><b>Founder Name :</b> {i.founderName} </p>
        <p className='userdashp'><b>Email :</b> {i.email} </p>
        <p className='userdashp'><b>Institute:</b> {i.instituteName}</p>
        <p className='userdashp'><b>Mentor Name:</b> {i.mentorName}</p>
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
        <p className='userdashp'><b>Register on :</b> {i.createdAt.substring(0,10)} </p>
        <hr></hr>
            </div>
          ))
        ) : (
          <p>No startup registered.</p>
        )}
      </div>
    </div>
  );
};

export default UserStartupview;
