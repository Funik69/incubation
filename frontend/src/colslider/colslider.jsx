import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slide1 from '../img/Slide1.jpeg';
import Slide2 from '../img/Slide2.jpeg';
import Slide3 from '../img/Slide3.jpeg';
import Slide4 from '../img/Slide4.jpeg';
import Slide5 from '../img/Slide5.jpeg';
import './colslider.css';

const images = [
  Slide2,Slide1,Slide4,Slide5,Slide3
];

function ColSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the image index in a circular manner
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  return (
    <div className="App">
      <div className='colCover'>
        <h1>Collaborate</h1>
      </div>
      <div className='slideshow-container'>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className='slideimg' />
        <div className='prev' onClick={goToPreviousSlide}>&#8249;</div>
        <div className='next' onClick={goToNextSlide}>&#8250;</div>
      <br></br>
      <h2 className='moreinfo'>You can also collaborate with us by either providing <u>Mentorship</u> or <u>Funding</u> support.To get more information, Click on the below button.</h2>
      <button onClick={() => navigate('/collaborate')} className='slidebut'><b>Know More .......</b></button>
      </div>
    </div>
  );
}

export default ColSlider;