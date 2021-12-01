import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import SearchBar from '../Components/SearchBar';
import FooterBar from '../Components/FooterBar';

type LocationProps = {
  address: string;
  landscape: string;
  infrastructure: string;
  latitude: number;
  longitude: number;
  id: number;
};

export default function MapOverview(): JSX.Element {
  const [results, setResults] = useState<LocationProps[] | null>([]);

  const getLocations = async () => {
    const response = await fetch('/api/locations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const locations = await response.json();
    console.log(locations);
    setResults(locations.results);
  };
  useEffect(() => {
    getLocations();
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
        {results?.map((result) => (
          <Marker
            key={result.id}
            position={[result.latitude, result.longitude]}
          >
            <Popup position={[result.latitude, result.longitude]}>
              <div>
                <h3>{'Adress: ' + result.address}</h3>
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
