import * as L from 'leaflet';
import CurrentLocationIcon from '../../assets/currentLocation.png';
import MarkerIcon from '../../assets/location.png';

export const currentMarker = new L.Icon({
  iconAnchor: [10, 40],
  iconUrl: CurrentLocationIcon,
});
export const allMarkers = new L.Icon({
  iconAnchor: [23, 53],
  iconUrl: MarkerIcon,
});
