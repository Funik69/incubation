import React, { useState } from 'react';
import './portfolio.css';
import image from '../img/incubation.logo.png';
import {useDataContext} from '../context/DataContext';
function Portfolio() {
    const {data} = useDataContext();
    const filteredData = data.filter((i)=> i.status ==='accepted');
    console.log(filteredData);
return (
    <>
    <div className='portCover'>
    <h1>The Successful Startups</h1>
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