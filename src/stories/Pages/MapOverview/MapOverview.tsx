import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import SearchBar from '../../Components/SearchBar';
import FooterBar from '../../Components/FooterBar';
import { LatLng } from 'leaflet';
import * as L from 'leaflet';

type LocationProps = {
  address: string;
  landscape: string;
  infrastructure: string;
  latitude: number;
  longitude: number;
  id: number;
};

function CenterButton({ position, setPosition }: any) {
  const map = useMap();
  const locateAndFly = () => {
    map.locate({ setView: true, maxZoom: map.getZoom() });
  };

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return (
    <button className={styles.navigateButton} onClick={() => locateAndFly()}>
      <img
        src="src/assets/FilterIcons_Campbay/navigateIcon.svg"
        alt="navigate"
      />
    </button>
  );
}

export default function MapOverview(): JSX.Element {
  const [locations, setLocations] = useState<LocationProps[] | null>([]);
  const [search, setSearch] = useState('');
  const [position, setPosition] = useState(new LatLng(0, 0));

  const fetchLocation = async (s: string) => {
    const response = await fetch('/api/locations?search=' + s);
    const data = await response.json();
    setLocations(data);
  };

  useEffect(() => {
    fetchLocation(search);
  }, [search]);
  const currentMarker = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: 'src/assets/pin (1) 1.png',
  });
  const allMarkers = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: 'src/assets/FilterIcons_Campbay/pin 1.png',
  });

  return (
    <div className={styles.mapPage}>
      <MapContainer
        center={[51.165691, 10.451526]}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
        className={styles.leafletContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations?.map((location) => (
          <Marker
            icon={allMarkers}
            key={location.id}
            position={[location.latitude, location.longitude]}
          >
            <Popup position={[location.latitude, location.longitude]}>
              <div className={styles.popupContent}>
                <img
                  className={styles.popupImage}
                  src={'src/assets/0afa121612.jpg'}
                  alt={'camping'}
                />
                <div className={styles.detailContainer}>
                  <h3 className={styles.adressLine}>{location.address}</h3>
                  <div>
                    <button className={styles.showMore}>
                      <img src={'src/assets/Arrow 1.png'} alt={'arrow'} />
                    </button>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        {position && (
          <Marker icon={currentMarker} position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        <CenterButton position={position} setPosition={setPosition} />
      </MapContainer>

      <SearchBar onSearch={setSearch} />

      <FooterBar />
    </div>
  );
}