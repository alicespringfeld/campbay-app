import React, { useState } from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import InfraTag from '../../Components/InfraTag/InfraTag';
import LandscapeFilterCard from '../../Components/LandscapeFilterCard/LandscapeFilterCard';
import LandscapeTag from '../../Components/LandscapeTag/LandscapeTag';
import styles from './SearchFilter.module.css';

const infraTags = [
  {
    text: 'With costs',
    src: 'src/assets/FilterIcons_Campbay/dollar-bill 1.svg',
    selected: false,
    id: 0,
  },
  {
    text: 'Timelimit',
    src: 'src/assets/FilterIcons_Campbay/stopwatch 1.svg',
    selected: false,
    id: 1,
  },
  {
    text: 'Toilet',
    src: 'src/assets/FilterIcons_Campbay/toilet 1.svg',
    selected: false,
    id: 2,
  },
  {
    text: 'Tap water',
    src: 'src/assets/FilterIcons_Campbay/water-tap 1.svg',
    selected: false,
    id: 3,
  },
  {
    text: 'Fireplace',
    src: 'src/assets/FilterIcons_Campbay/fire 1.svg',
    selected: false,
    id: 4,
  },
  {
    text: 'Waste disposal',
    src: 'src/assets/FilterIcons_Campbay/trash (1) 1.svg',
    selected: false,
    id: 5,
  },
  {
    text: 'Shopping facilities',
    src: 'src/assets/FilterIcons_Campbay/shopping-cart 1.svg',
    selected: false,
    id: 6,
  },
  {
    text: 'Power access',
    src: 'src/assets/FilterIcons_Campbay/plug 1.svg',
    selected: false,
    id: 7,
  },
];

export default function SearchFilter(): JSX.Element {
  const [itags, setITags] = useState(infraTags);

  function onITagClicked(id: number): void {
    const newITags = [...itags];
    const itag = newITags.find((itag) => itag.id === id);
    if (itag) {
      itag.selected = !itag.selected;
    }
    setITags(newITags);
  }

  return (
    <div className={styles.pageContainer}>
      <LandscapeFilterCard />
      <InfraFilterCard />
      <footer className={styles.footer}>
        <button className={styles.cancel}>
          <img src="src/assets/X-Icon.svg" />
        </button>
        <button type="submit" className={styles.filter}>
          <img src="src/assets/Filter_Button.svg" />
        </button>
      </footer>
    </div>
  );
}
