import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';

export default function LocationMarker() {
  const [position, setPosition] = useState(new LatLng(0, 0));

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
