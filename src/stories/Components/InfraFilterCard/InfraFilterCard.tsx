import React, { useState } from 'react';
import InfraTag from '../InfraTag/InfraTag';
import LandscapeFilterCard from '../LandscapeFilterCard/LandscapeFilterCard';
import styles from './InfraFilterCard.module.css';

const infraTags = [
  {
    text: 'Costs',
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
    text: 'Water',
    src: 'src/assets/FilterIcons_Campbay/water-tap 1.svg',
    selected: false,
    id: 3,
  },
  {
    text: 'Fireplace allowed',
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

export default function InfraFilterCard() {
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
    <div className={styles.cards}>
      <p className={styles.header}>Infrastructure</p>
      <div className={styles.itag}>
        {itags.map((itag) => (
          <InfraTag tag={itag} key={itag.id} onClick={onITagClicked} />
        ))}
      </div>
    </div>
  );
}
