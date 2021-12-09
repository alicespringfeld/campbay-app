import React, { useEffect, useState } from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import LandscapeTag from '../../Components/LandscapeTag/LandscapeTag';
import styles from './SearchFilter.module.css';

const landscapeTags = [
  {
    text: 'Forrest',
    src: 'src/assets/FilterIcons_Campbay/Forrest_Icon.svg',
    selected: false,
    id: 0,
  },
  {
    text: 'Mountains',
    src: 'src/assets/FilterIcons_Campbay/mountain 1.svg',
    selected: false,
    id: 1,
  },
  {
    text: 'Field',
    src: 'src/assets/FilterIcons_Campbay/fields 1.svg',
    selected: false,
    id: 2,
  },
  {
    text: 'River',
    src: 'src/assets/FilterIcons_Campbay/river 1.svg',
    selected: false,
    id: 3,
  },
  {
    text: 'Lake',
    src: 'src/assets/FilterIcons_Campbay/lake 1.svg',
    selected: false,
    id: 4,
  },
  {
    text: 'City',
    src: 'src/assets/FilterIcons_Campbay/cityscape 1.svg',
    selected: false,
    id: 5,
  },
];

export default function SearchFilter(): JSX.Element {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [ltags, setLTags] = useState(landscapeTags);

  // Select tag
  function onLTagClicked(id: number): void {
    const newLTags = [...ltags];
    const ltag = newLTags.find((ltag) => ltag.id === id);
    if (ltag) {
      ltag.selected = !ltag.selected;
    }
    setLTags(newLTags);
  }

  // Get selected landscape
  function FilterFunction(): void {
    const selectedLandscape = ltags
      .filter((ltag) => ltag.selected === true)
      .map((landscape) => landscape.text);
    const selectedLandscapeList = selectedLandscape.join('+');
    console.log(selectedLandscapeList);
    setSearchQuery(selectedLandscapeList);
  }

  // Get array of filtered Locations
  async function getFilteredLocations(): Promise<void> {
    const response = await fetch(`api/locations/:type/:${searchQuery}`);
    console.log(searchQuery);
    const body = await response.json();
    setFilteredLocations(body);
    console.log(filteredLocations);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cards}>
        <p className={styles.header}>Landscape</p>
        <div className={styles.tags}>
          {ltags.map((ltag) => (
            <LandscapeTag tag={ltag} key={ltag.id} onClick={onLTagClicked} />
          ))}
        </div>
      </div>
      <InfraFilterCard />
      <footer className={styles.footer}>
        <button className={styles.cancel}>
          <img src="src/assets/X-Icon.svg" />
        </button>
        <button
          type="submit"
          onClick={getFilteredLocations}
          className={styles.filter}
        >
          <img src="src/assets/Filter_Button.svg" />
        </button>
      </footer>
    </div>
  );
}
