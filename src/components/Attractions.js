import React from 'react';
import './Attractions.css'; // Ensure to create this CSS file

const attractions = [
  {
    name: "West Linton Village",
    description: "A charming village with historical sites and a quaint atmosphere, perfect for leisurely exploration.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/west-linton.jpeg", // Replace with actual image path
  },
  {
    name: "Pentland Hills",
    description: "Breathtaking natural beauty ideal for hiking, photography, and outdoor adventures.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/pentlands(1).jpeg", // Replace with actual image path
  },
  {
    name: "West Linton Golf Club",
    description: "Offering a beautiful golfing experience amidst well-maintained greens and scenic surroundings.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/golf.jpeg", // Replace with an actual image of the golf club
  },
  {
    name: "Horse Riding Adventures",
    description: "Explore the breathtaking landscapes of West Linton on horseback, suitable for all skill levels.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/horseriding.jpeg", // Replace with an actual image of horse riding
  },
  {
    name: "Edinburgh Fringe Festival",
    description: "Immerse yourself in the world’s largest arts festival, featuring thousands of performers in Scotland's capital.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/fringe.jpeg", // Replace with an actual image of the Edinburgh Fringe
  },
  // Add more attractions as needed
];

function Attractions() {
  return (
    <div className="attractions-section">
      <h2 className='attractions-title'>Local Attractions</h2>
      <div className="attractions-grid">
        {attractions.map((attraction, index) => (
          <div key={index} className="attraction-card">
            <img src={attraction.imageUrl} alt={attraction.name} />
            <div className="attraction-info">
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attractions;
