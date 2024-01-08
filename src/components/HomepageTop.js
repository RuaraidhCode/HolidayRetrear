import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './button';
import './HomepageTop.css';
import { Link } from 'react-router-dom';

function HomepageTop() {
  const images = [
    '/images/processed (46).jpeg',
    '/improved-images/balgonie(5).jpeg',
    '/images/processed (42).jpeg',
    '/improved-images/balgonie(1) copy.jpeg',
    '/improved-images/balgonie(2).jpeg',
    '/images/processed (44).jpeg',
    '/images/processed (46).jpeg',
  ]; // Add your image paths here

  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(-1);
  const [disableTransition, setDisableTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === images.length - 1) {
        // When the last image is reached, first disable the transition
        setDisableTransition(true);
        setTimeout(() => {
          // After disabling the transition, reset the images without transition
          setCurrentImage(0);
          setPrevImage(-1);
  
          // Re-enable the transition after another short delay
          setTimeout(() => {
            setDisableTransition(false);
          }, 50); // Adjust this delay as needed
        }, 1000); // This delay should match the transition duration
      } else {
        setPrevImage(currentImage);
        setCurrentImage(currentImage => (currentImage + 1) % images.length);
      }
    }, 5000); // Change image every 3 seconds
  
    return () => clearInterval(interval);
  }, [currentImage]);
  
  /*
 <Button
          linkTo='https://www.holidaycottages.co.uk/cottage/81467-balgonie-retreat'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MAKE A BOOKING
        </Button>
  */

  return (
    <div className='hero-container'>
{images.map((src, index) => (
  <img 
    key={src}
    className={`hero-image ${index === currentImage ? 'active' : ''} ${index === prevImage ? 'slide-out' : ''} ${disableTransition ? 'no-transition' : ''}`}
    src={src} 
    alt='Balgonie Retreat'
  />
))}
      <h1 className='home-heading'>BALGONIE RETREAT</h1>
      <p>Set in the beautiful countryside of the Scottish Borders</p>
      <div className='hero-btns'>
       
      </div>
    </div>
  );
}

export default HomepageTop;
