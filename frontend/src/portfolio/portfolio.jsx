import React, { useState } from 'react';
import './portfolio.css';
import image from '../img/incubation.logo.png';
function Portfolio() {
return (
    <>
    <div className='portCover'>
    <h1>The Successful Startups</h1>
    </div>

        <div className='con1'>
        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2>StartUp Name</h2>
            <p>The startup summary in few lines</p>
        </div>
        </div>
    </>
    );
}
export default Portfolio;