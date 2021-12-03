import { useEffect, useState } from 'react';

type Spot = {
  address: string;
  landscape: string;
  infrastructure: string;
  latitude: number;
  longitude: number;
  id: number;
};

export default function useSpots(search: string): Spot[] | null {
  const [spots, setSpots] = useState<Spot[] | null>(null);

  useEffect(() => {
    fetch(`/api/locations?q=${search}`)
      .then((response) => response.json())
      .then(setSpots);
  }, [search]);
  return spots;
}
