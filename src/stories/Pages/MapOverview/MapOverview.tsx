import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import SearchBar from '../../Components/SearchBar';
import FooterBar from '../../Components/FooterBar';

type LocationProps = {
  address: string;
  landscape: string;
  infrastructure: string;
  latitude: number;
  longitude: number;
  id: number;
};

export default function MapOverview(): JSX.Element {
  const [locations, setLocations] = useState<LocationProps[] | null>([]);

  const fetchLocation = async () => {
    const response = await fetch('/api/locations');
    const data = await response.json();
    setLocations(data);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className={styles.mapPage}>
      <SearchBar />

      <MapContainer
        center={[51.165691, 10.451526]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.leafletContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations?.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
          >
            <Popup position={[location.latitude, location.longitude]}>
              <div>
                <h3>{'Adress: ' + location.address}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button className={styles.navigateButton}>
        <img
          src="src/assets/FilterIcons_Campbay/navigateIcon.svg"
          alt="navigate"
        />
      </button>

      <FooterBar />
    </div>
  );
}
