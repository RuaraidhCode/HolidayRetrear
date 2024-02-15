import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './button';
import './HomepageTop.css';
import { Link } from 'react-router-dom';

function HomepageTop() {
/*
<div className='mobile-title-container'>
      <h1 className='mobile-container'>Balgonie Retreat</h1>
    </div>
*/
  const images = [
    process.env.PUBLIC_URL + '/improved-images/balgonie(15).jpeg',
    process.env.PUBLIC_URL + '/improved-images/balgonie(5).jpeg',
    process.env.PUBLIC_URL + '/improved-images/balgonie(16).jpeg',
    process.env.PUBLIC_URL + '/improved-images/balgonie(1) copy.jpeg',
    process.env.PUBLIC_URL + '/improved-images/balgonie(2).jpeg',
    process.env.PUBLIC_URL + '/images/processed (44).jpeg',
    process.env.PUBLIC_URL + '/improved-images/balgonie(15).jpeg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(-1);
  const [disableTransition, setDisableTransition] = useState(false);
  const [isSlideshowActive, setIsSlideshowActive] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsSlideshowActive(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    let interval;
    if (isSlideshowActive) {
      interval = setInterval(() => {
        if (currentImage === images.length - 1) {
          setDisableTransition(true);
          setTimeout(() => {
            setCurrentImage(0);
            setPrevImage(-1);
            setTimeout(() => setDisableTransition(false), 50); // Adjust this delay as needed
          }, 1000); // This delay should match the transition duration
        } else {
          setPrevImage(currentImage);
          setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }
      }, 5000); // Change image every 5 seconds
    } else {
      // Optionally, ensure a specific image shows when slideshow is not active
      setCurrentImage(0); // Or another logic to display a specific image
    }

    return () => clearInterval(interval);
  }, [currentImage, isSlideshowActive, images.length]);
    

  return (
    <>
    <div className='hero-container'>
{images.map((src, index) => (
  <img 
    key={src}
    className={`hero-image ${index === currentImage ? 'active' : ''} ${index === prevImage ? 'slide-out' : ''} ${disableTransition ? 'no-transition' : ''}`}
    src={src} 
    alt='Balgonie Retreat'
  />
))}
<div className='mobile_title_container'>
      <h1 className='mobile_container'>Balgonie Retreat</h1>
    </div>
        <h1 className='home-heading'>BALGONIE RETREAT</h1>
      <p>Set in the beautiful countryside of the Scottish Borders</p>
      <div className='hero-btns'>
       
      </div>
    </div>
    </>
  );
}

export default HomepageTop;
