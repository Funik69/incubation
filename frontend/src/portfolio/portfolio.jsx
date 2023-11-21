import React, { useState , useEffect } from 'react';
import './portfolio.css';
import image from '../img/incubation.logo.png';
function Portfolio() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
return (
    <>
    <div className='portCover'>
    <h1>Successful Startups</h1>
    </div>

        <div className='con1'>
        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>

        <div className='card1'>
            <img src={image} alt='Image' className='startuplogo'></img>
            <h2 className='startuphead'>StartUp Name</h2>
            <p className='startupdis'>The startup summary in few lines</p>
        </div>
        </div>
    </>
    );
}
export default Portfolio;