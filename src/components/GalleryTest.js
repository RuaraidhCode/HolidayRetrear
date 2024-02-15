import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './GalleryTest.css';

const GalleryTest = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imageBounds, setImageBounds] = useState(null);

  const selectImage = (src, bounds) => {
    setImageBounds(bounds);
    setSelectedImg(src);
  };

  return (
    <div className="gallery__container">
      {Array.from({ length: 24 }, (_, i) => (
        <div key={i} className="gallery-item" onClick={(e) => selectImage(process.env.PUBLIC_URL + `/improved-images/balgonie(${i + 1}).jpeg`, e.target.getBoundingClientRect())}>
          <motion.img 
            src={process.env.PUBLIC_URL + `/improved-images/balgonie(${i + 1}).jpeg`} 
            alt={`Balgonie ${i + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      ))}
      
      <AnimatePresence>
  {selectedImg && (
    <motion.div 
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImg(null)}
    >
     <motion.img 
  src={selectedImg} 
  alt="Enlarged"
  className="enlarged-img"
  initial={{
    opacity: 0, // Start from transparent to smoothly transition in
    x: imageBounds.left - (window.innerWidth / 2 - imageBounds.width / 2),
    y: imageBounds.top - (window.innerHeight / 2 - imageBounds.height / 2),
  }}
  animate={{
    x: 0,
    y: 0,
    opacity: 1
  }}
  exit={{ opacity: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
  onClick={(e) => e.stopPropagation()}
/>

    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default GalleryTest;
