import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapOverview.module.css';
import SearchBar from '../../Components/SearchBar';
import FooterBar from '../../Components/FooterBar';
import { LatLng } from 'leaflet';
import CenterButton from '../../Components/CenterButton/CenterButton';
import { currentMarker, allMarkers } from '../../Components/Markers';
import useLocations from '../../../utils/useLocations';
import ArrowIcon from '../../../assets/ArrowIcon.png';

export default function MapOverview(): JSX.Element {
  const retrievedObject: any = localStorage.getItem('filtered');
  const filteredLocations = JSON.parse(retrievedObject);
  console.log(retrievedObject);
  console.log({ filteredLocations });
  const [search, setSearch] = useState('');
  const locations = useLocations(search);
  const [position, setPosition] = useState(new LatLng(0, 0));
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [inVisible, setInVisible] = useState(true || false);

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
              <img src={ArrowIcon} alt={'arrow'} />
            </button>

            {locations!
              .filter((location) => location.id === selectedLocation)
              .map((filteredDetails) => (
                <div>
                  <img
                    className={styles.locationPhoto}
                    src={filteredDetails.imageUrl}
                  />
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

  // let finalLocations;
  // if (filteredLocations) {
  //   finalLocations = filteredLocations;
  // } else {
  //   finalLocations = locations;
  // }

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
        {locations?.map((location: any) => (
          <Marker
            icon={allMarkers}
            key={location.id}
            position={[location.latitude, location.longitude]}
          >
            <Popup position={[location.latitude, location.longitude]}>
              <div className={styles.popupContent}>
                <img
                  className={styles.popupImage}
                  src={location.imageUrl}
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
                      <img src={ArrowIcon} alt={'arrow'} />
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
