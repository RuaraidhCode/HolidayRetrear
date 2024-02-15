import React from 'react';
import './Summary.css'; // Make sure you have this CSS file in the same directory

const Summary = () => {
    // Splitting the bullet points into two arrays for two columns
    const firstHalf = [
        "5 bedrooms – 2 Super king size, 2 twins, 1 single",
        "3 en-suite showers with WCs, 2 additional shower rooms with WCs, 1 bathroom with bath and separate shower",
        "Kitchen equipped with Raeburn stove, electric hob, American-style fridge/freezer, and dishwasher",
        "Utility room with electric oven, grill, microwave, tumble dryer, and 2 washing machines",
        "2 wood burners – 2 big baskets of logs provided",
        "Private sauna",
        "Smart TV in lounge and games room",
        "Games room with pool table, table tennis, selection of games, books, and large Smart TV",
        "Snug with piano and guitars",
       
    ];
    const secondHalf = [
        "Large mature garden with patio seating area, and covered decked area with seating and charcoal BBQ",
        "2 Travel cots and 1 highchair available",
        "Secure bike storage",
        "Ample off-road private parking",
        "Pub, shops, and restaurant within walking distance",
        "Note: Permit required for fishing in the Pentlands (seasonal)",
        "Stag/Hen Parties are not allowed",
        "Group bookings may require a security deposit",
        "Property decorated for Christmas",
        "Arrival: 16:00 onwards. Departure: before 10:00",
        "2 dogs allowed (charge applies)",
    ];

    return (
        <div className='summary__wrapper'>
        <div className="summary-container">
            <h1 className="summary-title">Summary</h1>
            <div className="summary-columns">
                <ul className="summary-list">
                    {firstHalf.map((item, index) => (
                        <li key={`first-${index}`}>{item}</li>
                    ))}
                </ul>
                <ul className="summary-list">
                    {secondHalf.map((item, index) => (
                        <li key={`second-${index}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Summary;
