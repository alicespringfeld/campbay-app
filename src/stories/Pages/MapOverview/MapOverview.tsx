import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import SearchBar from '../../Components/SearchBar';
import FooterBar from '../../Components/FooterBar';
import { LatLng } from 'leaflet';
import * as L from 'leaflet';
import CenterButton from '../../Components/CenterButton/CenterButton';

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
  const [search, setSearch] = useState('');
  const [position, setPosition] = useState(new LatLng(0, 0));
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [inVisible, setInVisible] = useState(true || false);

  const fetchLocations = async (s: string) => {
    const response = await fetch('/api/locations?search=' + s);
    const data = await response.json();
    setLocations(data);
  };

  useEffect(() => {
    fetchLocations(search);
  }, [search]);

  const currentMarker = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: 'src/assets/pin (1) 1.png',
  });
  const allMarkers = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: 'src/assets/FilterIcons_Campbay/pin 1.png',
  });

  let popup;

  if (selectedLocation) {
    popup = (
      <div className={styles.mainContainer}>
        {inVisible ? (
          <div className={styles.container}>
            <button
              onClick={() => setInVisible(!inVisible)}
              className={styles.swipeAway}
            >
              <img src={'src/assets/Arrow 1.png'} alt={'arrow'} />
            </button>
          </div>
        ) : null}
        {inVisible ? (
          <div>
            <img
              className={styles.locationImage}
              src={'src/assets/5597481_orig-1200x480 2.png'}
            />
            {locations!
              .filter((location) => location.id === selectedLocation)
              .map((filteredDetails) => (
                <section
                  key={filteredDetails.id}
                  className={styles.detailContainer}
                >
                  <div className={styles.addressLine}>
                    Adress: {filteredDetails.address}
                  </div>
                  <div className={styles.landscapeLine}>
                    Landscape:
                    <img
                      src={`src/assets/FilterIcons_Campbay/${filteredDetails.landscape}.svg`}
                      alt={'arrow'}
                    />
                  </div>
                  <div className={styles.infraLine}>
                    Infrastructure: {filteredDetails.infrastructure}
                  </div>
                </section>
              ))}
          </div>
        ) : null}
      </div>
    );
  } else {
    popup = (
      <>
        <SearchBar onSearch={setSearch} />
        <FooterBar />
      </>
    );
  }
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
                    <button
                      onClick={() => {
                        setSelectedLocation(location.id);
                        setInVisible(!inVisible);
                      }}
                      className={styles.showMore}
                    >
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
      {popup}
    </div>
  );
}
