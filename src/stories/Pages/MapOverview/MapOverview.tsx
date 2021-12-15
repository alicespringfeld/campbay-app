import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
    iconAnchor: [10, 40],
    iconUrl: 'src/assets/currentLocation.png',
  });
  const allMarkers = new L.Icon({
    iconAnchor: [23, 53],
    iconUrl: 'src/assets/location.png',
  });

  let detailCard;

  if (selectedLocation) {
    detailCard = (
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
              className={styles.locationPhoto}
              src={'src/assets/5597481_orig-1200x480 2.png'}
            />
            {locations!
              .filter((location) => location.id === selectedLocation)
              .map((filteredDetails) => (
                <div
                  key={filteredDetails.id}
                  className={styles.detailContainer}
                >
                  <div className={styles.addressLine}>
                    Adress:
                    <div className={styles.address}>
                      {filteredDetails.address}
                    </div>
                  </div>
                  <div className={styles.landscapeLine}>
                    Landscape:
                    <div>
                      <img
                        src={`src/assets/DetailCard_IconTags/${filteredDetails.landscape}.svg`}
                        alt={'landicon'}
                        className={styles.iconImage}
                      />
                    </div>
                  </div>
                  <div className={styles.infraLine}>
                    Infrastructure:
                    <img
                      src={`src/assets/DetailCard_IconTags/${filteredDetails.infrastructure}.svg`}
                      alt={'infraicon'}
                      className={styles.infraIcon}
                    />
                  </div>
                </div>
              ))}
          </div>
        ) : null}
      </div>
    );
  } else {
    detailCard = (
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
                <div className={styles.popupContainer}>
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
            <Popup position={position}>You are here</Popup>
          </Marker>
        )}
        <CenterButton setPosition={setPosition} />
      </MapContainer>
      <SearchBar onSearch={setSearch} />
      <FooterBar />
      {detailCard}
    </div>
  );
}
