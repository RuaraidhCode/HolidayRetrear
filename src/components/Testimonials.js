import React from 'react';
import './Testimonials.css'; // Ensure to create this CSS file

function Testimonials() {
  const testimonials = [
    {
      quote: "This house is exactly as described and as pictured. It is a lovely house! Great communication from Lucy and helpful guides to everything you need to know about the house and general area",
      author: "Laura"
    },
    {
      quote: "It's an excellent house for a large family gathering. Well equipped, very comfortable beds, great showers. Good restaurant and pub in the village as well as a Co-op and butcher's shop",
      author: "Janet"
    },
    {
      quote: "Absolutely a wonderful place to stay! Very serene and peaceful. The house was large , spacious and comfortable. The hosts Lucy and Kenny were very gracious and were on hand to help if needed. Altogether a relaxing and charming house and hosts! Will definitely return",
      author: "Meena"
    }
  ];

  return (
    <div className="testimonials-section">
      <h2 className='testimonial-title'>Guest Testimonials</h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
