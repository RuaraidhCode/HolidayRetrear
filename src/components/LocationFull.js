import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './LocationFull.css'; // Importing the CSS file
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function LocationFull() {
  const position = [55.740596, -3.336971];
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="container">
      <div className="text-section">
        <h2>How to Find Us</h2>
        <div className="directions">
        <h3>Arriving by Car from the South</h3>
        <p>Arriving by car from the south: take M6/M74 Junction 13, Abington, (signposted Edinburgh). After 23 miles you will arrive in West Linton. Turn right into the village and drive through, bearing left on the B7059 for approx. 1 mile. Balgonie Retreat is situated next on the right after Broomlee Centre.</p>
        
        <h3>Scenic Route from the South</h3>
        <p>For a slightly longer, more scenic route: take M6/M74 Junction 15, Moffat, A701 North. After 33 miles you will go through Romanno Bridge. Just after, take the B7059 left sign posted West Linton for 1.5 miles and Balgonie Retreat is situated on the left-hand side.</p>

        <h3>Arriving by Car from the North</h3>
        <p>Arriving by car from the north: take the Edinburgh City Bypass A720 to Lothianburn Junction, signposted A702, Biggar and Carlisle. After 12 miles you will arrive in West Linton. Turn left into the village and drive through, bearing left on the B7059 for approx. 1 mile. Balgonie Retreat is situated next on the right after Broomlee Centre.</p>
        </div>
      </div>
      <div className="map-section">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Balgonie Retreat is here. <br /> Easily accessible via M6/M74.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default LocationFull;
