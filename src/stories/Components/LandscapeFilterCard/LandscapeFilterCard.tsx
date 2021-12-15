import React, { useState } from 'react';
import styles from './LandscapeFilterCard.module.css';
import LandscapeTag from '../LandscapeTag/LandscapeTag';
import Forest from '../../../assets/FilterIcons_Campbay/forest.svg';
import Mountains from '../../../assets/FilterIcons_Campbay/mountains.svg';
import Fields from '../../../assets/FilterIcons_Campbay/fields.svg';
import River from '../../../assets/FilterIcons_Campbay/river.svg';
import Lake from '../../../assets/FilterIcons_Campbay/lake.svg';
import City from '../../../assets/FilterIcons_Campbay/city.svg';

const landscapeTags = [
  {
    text: 'forest',
    src: Forest,
    selected: false,
    id: 0,
  },
  {
    text: 'mountains',
    src: Mountains,
    selected: false,
    id: 1,
  },
  {
    text: 'fields',
    src: Fields,
    selected: false,
    id: 2,
  },
  {
    text: 'river',
    src: River,
    selected: false,
    id: 3,
  },
  {
    text: 'lake',
    src: Lake,
    selected: false,
    id: 4,
  },
  {
    text: 'city',
    src: City,
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
