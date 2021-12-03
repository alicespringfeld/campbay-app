import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';

export default function LocationMarker() {
  const [position, setPosition] = useState(new LatLng(0, 0));

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
