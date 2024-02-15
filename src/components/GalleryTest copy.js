import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './GalleryTest.css';


const GalleryTest = () => {
  
  const [index, setIndex] = useState(-1);

const images = [
   {
      src: process.env.PUBLIC_URL + "/improved-images/balgonie(1).jpeg",
      width: 320,
      height: 174,
   },
   {
      src: process.env.PUBLIC_URL + "/improved-images/balgonie(2).jpeg",
      width: 320,
      height: 212,
   },
   {
      src: process.env.PUBLIC_URL + "/improved-images/balgonie(3).jpeg",
      width: 320,
      height: 212,
   },
   {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(4).jpeg",
    width: 320,
    height: 174,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(5).jpeg",
    width: 320,
    height: 212,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(6).jpeg",
    width: 320,
    height: 212,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(7).jpeg",
    width: 320,
    height: 213,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(8).jpeg",
    width: 320,
    height: 183,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(9).jpeg",
    width: 240,
    height: 320,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(10).jpeg",
    width: 320,
    height: 190,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(11).jpeg",
    width: 320,
    height: 148,
  },
  {
    src: process.env.PUBLIC_URL + "/improved-images/balgonie(12).jpeg",
    width: 320,
    height: 213,
  },
   
];
 

const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);


  return (
      <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {index >= 0 && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          nextSrc={nextImage.src}
          prevSrc={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
      </div>
  ); 
};

export default GalleryTest;
