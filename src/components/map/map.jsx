import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import chat from "../images/chat.png"
import bed from "../images/bed.png"
import save from "../images/save.png"
import bath from "../images/bath.png"
import pin from "../images/pin.png"
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const properties = [
  { id: 1, name: 'Suncity Spacious Living Spaces', address: "Suncity, Sector-54, Gurgaon", lat: 28.435302734375, lon: 77.1102294921875, image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?cs=srgb&dl=pexels-fotoaibe-1643383.jpg&fm=jpg', price: "3,00,00,000", bedrooms: 4, bathrooms: 5 },
  { id: 2, name: 'Highstone Corporate Offices', address: "Satellite Road, Ahemdabad", lat: 23.027686, lon: 72.5177376, image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: "1,50,000", bedrooms: 2, bathrooms: 2   },
  { id: 3, name: 'Mahaveer Regal Apartments', address: "Basapura, Bengluru", lat: 12.9567612, lon: 77.7181212, image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: "70,00,000", bedrooms: 3, bathrooms: 3 },  
];

function App() {
  return (
    <div className="App">
      <MapContainer center={[17.723125457763672, 83.30795288085938]} zoom={5} style={{ height: "150vh", width: "50%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {properties.map(property => (
          <Marker position={[property.lat, property.lon]} key={property.id} icon={new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}>
            <Popup>
              <div className="card">
                <div className="imageContainer">
                  <img src={property.image} alt="" />
                </div>
                <div className="textContainer">
                  <h2 className="title">{property.name}</h2>
                  <p className="address">
                    <div className="features">
                      <div className="feature">
                    <img src={pin} alt="" />
                    <span>{property.address}</span>
                    </div>
                    </div>
                  </p>
                  <p className="price">Rs. {property.price}</p>
                  <div className="bottom">
                    <div className="features">
                      <div className="feature">
                        <img src={bed} alt="" />
                        <span>{property.bedrooms} bedroom</span>
                      </div>
                      <div className="feature">
                        <img src={bath} alt="" />
                        <span>{property.bathrooms} bathroom</span>
                      </div>
                    </div>
                    <div className="icons">
                      <div className="icon">
                        <img src={save} alt="" />
                      </div>
                      <div className="icon">
                        <img src={chat} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="listings">
        {properties.map(property => (
          <div className="listing" key={property.id}>
            <img src={property.image} alt={property.name} style={{ width: '50%', float: 'left', marginRight: '10px' }} />
            <div className="property-details">
              <h2>{property.name}</h2>
              <br /><br />
              <p>{property.address}</p>
              <br /><br />
              <p className="price">Rs.{property.price}</p>
              <br /><br />
              <p>{property.bedrooms} bedrooms • {property.bathrooms} bathrooms</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
