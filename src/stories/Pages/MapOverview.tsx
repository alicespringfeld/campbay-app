import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import SearchBar from '../Components/SearchBar';
import FooterBar from '../Components/FooterBar';
import sitesData from '../../data/sites.json';

export default function MapOverview(): JSX.Element {
  const filteredLocations = sitesData.filter(
    (site) => site.address.area === 'Bavaria'
  );

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
        {filteredLocations.map((site) => (
          <Marker
            key={site.id}
            position={[site.gps.latitude, site.gps.longitude]}
          >
            <Popup position={[site.gps.latitude, site.gps.longitude]}>
              <div>
                <h3>
                  {'Adress: ' + site.address.street + ', ' + site.address.city}
                </h3>
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
