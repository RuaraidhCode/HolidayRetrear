import React from 'react';
import 'leaflet/dist/leaflet.css';
import './Location.css'; // Ensure you have this CSS file
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // React-Leaflet for interactive map

function Location() {
  const position = [55.7609, -3.3615]; // Replace with the exact coordinates for Balgonie Retreat

  return (
    <div className="where-to-find-us-section">
      <h2>Where to Find Us</h2>
      <div className="directions">
        <h3>Arriving by Car from the South</h3>
        <p>Arriving by car from the south: take M6/M74 Junction 13, Abington, (signposted Edinburgh). After 23 miles you will arrive in West Linton. Turn right into the village and drive through, bearing left on the B7059 for approx. 1 mile. Balgonie Retreat is situated next on the right after Broomlee Centre.</p>
        
        <h3>Scenic Route from the South</h3>
        <p>For a slightly longer, more scenic route: take M6/M74 Junction 15, Moffat, A701 North. After 33 miles you will go through Romanno Bridge. Just after, take the B7059 left sign posted West Linton for 1.5 miles and Balgonie Retreat is situated on the left-hand side.</p>

        <h3>Arriving by Car from the North</h3>
        <p>Arriving by car from the north: take the Edinburgh City Bypass A720 to Lothianburn Junction, signposted A702, Biggar and Carlisle. After 12 miles you will arrive in West Linton. Turn left into the village and drive through, bearing left on the B7059 for approx. 1 mile. Balgonie Retreat is situated next on the right after Broomlee Centre.</p>
      </div>
    </div>
  );
}


export default Location;
