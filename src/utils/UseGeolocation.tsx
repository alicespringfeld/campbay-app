import React, { useEffect, useState } from 'react';

export default function useGeoLocation() {
  const [userLocation, setUserLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onSuccess = (userLocation: {
    coords: { latitude: number; longitude: number };
  }) => {
    setUserLocation({
      loaded: true,
      coordinates: {
        lat: userLocation.coords.latitude,
        lng: userLocation.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setUserLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'geolocation not supported',
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return userLocation;
}
