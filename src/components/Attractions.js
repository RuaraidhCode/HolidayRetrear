import React from 'react';
import './Attractions.css'; // Ensure to create this CSS file
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const attractions = [
  {
    name: "West Linton Village",
    description: "A charming village with historical sites and a quaint atmosphere, perfect for leisurely exploration.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/west-linton.jpeg", 
  },
  {
    name: "Pentland Hills",
    description: "Breathtaking natural beauty ideal for hiking, photography, and outdoor adventures.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/pentlands(1).jpeg",
  },
  {
    name: "West Linton Golf Club",
    description: "Offering a beautiful golfing experience amidst well-maintained greens and scenic surroundings.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/golf.jpeg", 
  },
  {
    name: "Horse Riding Adventures",
    description: "Explore the breathtaking landscapes of West Linton on horseback, suitable for all skill levels.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/horseriding.jpeg", 
  },
  {
    name: "Edinburgh Fringe Festival",
    description: "Immerse yourself in the world’s largest arts festival, featuring thousands of performers in Scotland's capital.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/fringe.jpeg", 
  },
  {
    name: "Glentress",
    description: "Award-winning mountain biking trails amidst stunning forest scenery, offering a blend of thrilling paths and picturesque views.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/glentress.jpeg",
  },
  {
    name: "Stobo Castle",
    description: "A luxurious retreat set in a historic castle, offering serene spa experiences and exquisite gardens for ultimate relaxationy.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/stobo.jpeg",
  },
  {
    name: "Go Ape",
    description: "An exhilarating treetop adventure with zip lines, rope bridges, and swings, set in a beautiful forest environment.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/goape.jpeg",
  },
  {
    name: "Hillend Ski Slope",
    description: "The UK's longest artificial ski slope offering a unique skiing and snowboarding experience with stunning views.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/hillend.jpeg",
  },
  {
    name: "Gordan Arms",
    description: "A cozy and traditional pub in West Linton, known for its warm hospitality and delicious local cuisine.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/gordanarms.jpeg",
  },
  {
    name: "Pyet Deli",
    description: "A renowned local butcher offering a selection of premium meats, artisanal charcuterie, and homemade delicacies.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/pyetdeli.jpeg",
  },
  {
    name: "Horseshoe Inn",
    description: "An idyllic country inn in Eddleston offering exquisite dining, comfortable accommodations, and a charming atmosphere.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/horseshoeinn.jpeg",
  },
  {
    name: "Whitmuir",
    description: "A delightful destination near West Linton, featuring organic farming, a charming farm shop, and engaging educational tours.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/whitmuir.jpeg",
  },
];

const attractionVariants = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, translateY: 50 },
};

function AttractionCard({ attraction }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={attractionVariants}
      className="attraction-card"
    >
      <img src={attraction.imageUrl} alt={attraction.name} />
      <div className="attraction-info">
        <h3>{attraction.name}</h3>
        <p>{attraction.description}</p>
      </div>
    </motion.div>
  );
}

function Attractions() {
  return (
    <div className="attractions-section">
      <h2 className='attractions-title'>Local Attractions</h2>
      <div className="attractions-grid">
        {attractions.map((attraction, index) => (
          <AttractionCard key={index} attraction={attraction} />
        ))}
      </div>
    </div>
  );
}


export default Attractions
