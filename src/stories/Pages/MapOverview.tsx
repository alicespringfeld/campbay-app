import React from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapOverview() {
  return (
    <div className={styles.leafletContainer}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
