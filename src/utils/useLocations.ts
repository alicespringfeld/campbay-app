import { useEffect, useState } from 'react';

type LocationProps = {
  address: string;
  landscape: string;
  infrastructure: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  id: number;
};

export default function useLocations(s: string): LocationProps[] | null {
  const [locations, setLocations] = useState<LocationProps[] | null>([]);
  useEffect(() => {
    fetch('/api/locations?search=' + s)
      .then((response) => response.json())
      .then(setLocations);
  }, [s]);
  return locations;
}
