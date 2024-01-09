import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='sections-wrapper'>
        <div className='section-left'>
          <img className='section-img-1' src={process.env.PUBLIC_URL + "/images/processed (7).jpeg"} alt="Image" />
        </div>
        <div className='section-right'>
          <h1 className='section-text'>The Property</h1>
          <p className='property-text-1'>Balgonie Retreat has undergone recent extensive refurbishment having served as a family home for the owners for over 20 years.
Situated in the Borders countryside, this large property uniquely caters for those who love the outdoors and those who simply want to relax in a peaceful setting with woodland, farmland and hillsides all around. The local village West Linton is only a mile down the road and Edinburgh is easily accessible for culture, shopping and memorable nights out in its famous bars and restaurants.</p>
        </div>
      </div>
      <div className='sections-wrapper'>
        <div className='section-left'>
<p className='property-text-2'>
The property itself is ideal for all ages, whether needing to recharge from a day on the hills or simply to put your feet up in front of a warm woodburning fire.
If the weather keeps you indoors there is ample entertainment with a piano, small pool table, table tennis, games, books, TV and a Games TV to keep the younger guests amused.
Outdoors, the large garden is caringly tended and short walks to the nearby river are ideal for clearing the mind and enjoying the local wildlife.
</p>    
        </div>
        <div className='section-right'>
          <img className='section-img-2' src={process.env.PUBLIC_URL + "/improved-images/balgonie(5).jpeg"} alt="Image" />
        </div>
      </div>

      <div className='sections-wrapper'>
        <div className='section-left'>
          <img className='section-img-2' src={process.env.PUBLIC_URL + "/improved-images/pentlands(1).jpeg"} alt="Image" />
        </div>
        <div className='section-right'>
        <h1 className='section-text'>Location</h1>
        <p className='property-text-3'>
          The property is located in the countryside one mile from the Borders village of West Linton, adjacent to the owners home and a Boarding Cattery. There are plentiful walking opportunities in the area either locally from the property or nearby in the Pentland Hills. Cycling is popular, with a number of road routes recommended for all levels, and mountain biking for beginners for experts can be accessed at the Glentress Mountain Bike Trail Centre in the forest facilities 14 miles away. Or you can make up your own routes in the Pentland Hills.
          </p>
        </div>
      </div>

      <div className='sections-wrapper'>
        <div className='section-left'>
        <p className='property-text-4'>Horse-riding is popular and can be arranged at nearby stables. Fishing can also be arranged locally on request either on the river or on a small loch 5 miles away. The Midlothian Snowsports Centre with year-round ski and snow-boarding available on the large outdoor ski slope overlooking Edinburgh 13 miles from the property.
          </p>
        </div>
        <div className='section-right'>
          <img className='section-img-2' src={process.env.PUBLIC_URL + "/improved-images/horseriding.jpeg"} alt="Image" />
        </div>
      </div>

      <div className='sections-wrapper'>
        <div className='section-left'>
          <img className='section-img-2' src={process.env.PUBLIC_URL + "/improved-images/edinburgh.jpeg"} alt="Image" />
        </div>
        <div className='section-right'>
        <p className='property-text-4'>
          Edinburgh City Centre is only 18 miles away, with access to all that Scotland’s capital city has to offer, and is accessible by car, bus, park-and-ride, or a local taxi company which is available for car or mini-bus hire to and from the airport, station or for those enjoying a day trip or an evening out.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;