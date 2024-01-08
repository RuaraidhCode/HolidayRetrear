import React from 'react';
import './Activities.css'; // Ensure you have this CSS file

const activitiesData = [
  {
    name: "Games Room",
    description: " A pool table which turns into a table tennis table. A PS4 with a collection of games",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/balgonie(13).jpeg", // Replace with actual image path
  },
  {
    name: "Sauna",
    description: "Relax in a cozy sauna after a long day.",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/sauna.jpeg", // Replace with actual image path
  },
  {
    name: "Snug Lounge",
    description: "A cozy place to relax with a Smart TV, board games, piano and guitars",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/balgonie(8).jpeg", // Replace with actual image path
  },
  {
    name: "Garden",
    description: "Large mature garden with patio seating area, and covered decked area with seating and charcoal BBQ",
    imageUrl: process.env.PUBLIC_URL + "/images/processed (7).jpeg", // Replace with actual image path
  },
  {
    name: "5 Bedrooms",
    description: "2 Super king size bedrooms, 2 twins and 1 single",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/balgonie(9).jpeg", // Replace with actual image path
  },
  {
    name: "2 Wood Burners",
    description: "2 big baskets of logs provided",
    imageUrl: process.env.PUBLIC_URL + "/improved-images/balgonie(3).jpeg", // Replace with actual image path
  },
  // Add more activities as needed
];

function Activities() {
  return (
    <div className="activities-section">
        <div className='activities-container'>
      <h2 className='activities-title'>Activities & Amenities</h2>
      <div className="activities-grid">
        {activitiesData.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.imageUrl} alt={activity.name} className="activity-image" />
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Activities;
