import React from 'react';
import './Accommodation.css'; // Make sure to create this CSS file

function Accommodations() {
  const accommodations = [
    {
      name: "Luxury Suite",
      description: "A spacious suite with stunning views and top-notch amenities.",
      imageUrl: '/improved-images/balgonie(8).jpeg',
    },
    {
        name: "Sauna Suite",
        description: "A nice wee sauna.",
        imageUrl: '/improved-images/balgonie(12).jpeg',
      },
      {
        name: "Walks",
        description: "A nice wee walk.",
        imageUrl: '/improved-images/balgonie(3).jpeg',
      },
    // Add more accommodation objects here
  ];

  return (
    <div className="accommodations-section">
      <h2>Things to do</h2>
      <div className="accommodations-grid">
        {accommodations.map((item, index) => (
          <div key={index} className="accommodation-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accommodations;