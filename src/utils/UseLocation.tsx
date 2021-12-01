import { useState } from 'react';

export default function UseLocation() {
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async (location: {
    address: string;
    landscape: string;
    infrastructure: string;
    latitude: number;
    longitude: number;
  }) => {
    setIsLoading(true);
    await fetch('http://localhost:3001/api/locations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    });
    setIsLoading(false);
  };

  return { isLoading, getLocation };
}
