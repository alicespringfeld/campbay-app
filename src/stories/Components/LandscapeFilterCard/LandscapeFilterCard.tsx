import React, { useState } from 'react';
import styles from './LandscapeFilterCard.module.css';
import LandscapeTag from '../LandscapeTag/LandscapeTag';

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

export default function LandscapeFilterCard() {
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

  return (
    <div className={styles.cards}>
      <p className={styles.header}>Landscape</p>
      <div className={styles.tags}>
        {ltags.map((ltag) => (
          <LandscapeTag tag={ltag} key={ltag.id} onClick={onLTagClicked} />
        ))}
      </div>
    </div>
  );
}
