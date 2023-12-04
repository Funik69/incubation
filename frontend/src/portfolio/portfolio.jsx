import React, { useState , useEffect } from 'react';
import './portfolio.css';
import image from '../img/incubation.logo.png';
import {useDataContext} from '../context/DataContext';
function Portfolio() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const {data} = useDataContext();
    const filteredData = data.filter((i)=> i.status ==='accepted');
return (
    <>
    <div className='portCover'>
    <h1>Successful Startups</h1>
    </div>

        <div className='con1'>
        {
            filteredData.map((i) => (
            <div className='card1' key={i._id}>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>{i.startupName}</h2>
            <p>{i.businessIdea}</p>
            <p>founded by {i.founderName}</p>
        </div>
            ))
        }
        </div>
    </>
    );
}
export default Portfolio;