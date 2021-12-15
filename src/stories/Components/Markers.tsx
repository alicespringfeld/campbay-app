import * as L from 'leaflet';

export const currentMarker = new L.Icon({
  iconAnchor: [10, 40],
  iconUrl: 'src/assets/currentLocation.png',
});
export const allMarkers = new L.Icon({
  iconAnchor: [23, 53],
  iconUrl: 'src/assets/location.png',
});
