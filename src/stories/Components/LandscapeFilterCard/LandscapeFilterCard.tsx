import React, { useState } from 'react';
import styles from './LandscapeFilterCard.module.css';
import LandscapeTag from '../LandscapeTag/LandscapeTag';

const landscapeTags = [
  {
    text: 'forest',
    src: 'src/assets/FilterIcons_Campbay/forrest.svg',
    selected: false,
    id: 0,
  },
  {
    text: 'mountains',
    src: 'src/assets/FilterIcons_Campbay/mountains.svg',
    selected: false,
    id: 1,
  },
  {
    text: 'fields',
    src: 'src/assets/FilterIcons_Campbay/fields.svg',
    selected: false,
    id: 2,
  },
  {
    text: 'river',
    src: 'src/assets/FilterIcons_Campbay/river.svg',
    selected: false,
    id: 3,
  },
  {
    text: 'lake',
    src: 'src/assets/FilterIcons_Campbay/lake.svg',
    selected: false,
    id: 4,
  },
  {
    text: 'city',
    src: 'src/assets/FilterIcons_Campbay/city.svg',
    selected: false,
    id: 5,
  },
];

type LandscapeProps = {
  landTags?: any;
  setLandTags: any;
};

export default function LandscapeFilterCard({
  landTags = landscapeTags,
  setLandTags,
}: LandscapeProps) {
  // Select tag
  function onLandTagClicked(id: number): void {
    const newLandTags = [...landTags];
    const landTag = newLandTags.find((landTag) => landTag.id === id);
    if (landTag) {
      landTag.selected = !landTag.selected;
    }
    setLandTags(newLandTags);
  }

  return (
    <div className={styles.cards}>
      <p className={styles.header}>Landscape</p>
      <div className={styles.tags}>
        {landTags.map((landTag: any) => (
          <LandscapeTag
            tag={landTag}
            key={landTag.id}
            onClick={onLandTagClicked}
          />
        ))}
      </div>
    </div>
  );
}
