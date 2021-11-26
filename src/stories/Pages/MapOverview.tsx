import React from 'react';
<<<<<<< HEAD
=======
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
>>>>>>> d4ddc7b250496e908d52891355933674148a454f
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
