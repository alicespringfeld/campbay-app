import React, { useState } from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import LandscapeFilterCard from '../../Components/LandscapeFilterCard/LandscapeFilterCard';
import styles from './SearchFilter.module.css';

export default function SearchFilter(): JSX.Element {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [landscapeTags, setLandscapeTags] = useState<any[]>([]);
  const [infraTags, setInfraTags] = useState<any[]>([]);

  const selectedOptions =
    infraTags!.filter((tag) => tag.selected)?.length &&
    landscapeTags!.filter((tag) => tag.selected)?.length;

  // Get array of filtered Locations
  async function getFilteredLocations(): Promise<void> {
    if (infraTags && landscapeTags) {
      const selectedInfraTags = infraTags.filter((tag) => tag.selected);
      const selectedLandscapeTags = landscapeTags.filter((tag) => tag.selected);
      const params = new URLSearchParams();
      params.append(
        'infrastructure',
        selectedInfraTags[0]?.text?.toLowerCase()
      );
      params.append('landscape', selectedLandscapeTags[0]?.text?.toLowerCase());
      const response = await fetch(`api/locations/search?${params.toString()}`);
      const results = await response.json();
      setFilteredLocations(results);
      console.log(filteredLocations);
    }
  }

  return (
    <div className={styles.pageContainer}>
      <LandscapeFilterCard setLandTags={setLandscapeTags} />
      <InfraFilterCard setInfratags={setInfraTags} />
      <footer className={styles.footer}>
        <button className={styles.cancel}>
          <img src="src/assets/X-Icon.svg" />
        </button>
        <button
          type="submit"
          onClick={getFilteredLocations}
          className={styles.filter}
          disabled={!selectedOptions}
        >
          <img src="src/assets/Filter_Button.svg" />
        </button>
      </footer>
    </div>
  );
}
