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
import DetailCard, {
  DetailCardProps,
} from '../../Components/DetailCard/DetailCard';

export default function MapOverview(): JSX.Element {
  const retrievedObject: any = localStorage.getItem('filtered');
  const filteredLocations = JSON.parse(retrievedObject);
  console.log(retrievedObject);
  console.log({ filteredLocations });
  const [search, setSearch] = useState('');
  const locations = useLocations(search);
  const [position, setPosition] = useState(new LatLng(0, 0));
  const [detail, setDetail] = useState<DetailCardProps | null>(null);

  function close() {
    setDetail(null);
  }

  let finalLocations;
  if (filteredLocations) {
    finalLocations = filteredLocations;
  } else {
    finalLocations = locations;
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
        {finalLocations?.map((location: any) => (
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
                        setDetail(location);
                        console.log(location);
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
            <Popup position={position}>
              <p className={styles.popUpText}>You are here!</p>
            </Popup>
          </Marker>
        )}
        <CenterButton setPosition={setPosition} />
      </MapContainer>
      <SearchBar onSearch={setSearch} />
      <FooterBar />

      <div className={styles.detailCard}>
        {detail && (
          <DetailCard
            id={detail.id}
            imageUrl={detail.imageUrl}
            address={detail.address}
            landscape={`/${detail.landscape}.png`}
            infrastructure={`/${detail.infrastructure}.png`}
            close={() => close()}
          />
        )}
      </div>
    </div>
  );
}
