import React, { useState } from 'react';
import LandscapeTag from '../../Components/LandscapeTag/LandscapeTag';
import styles from './SearchFilter.module.css';

const initialTags = [
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
  const [tags, setTags] = useState(initialTags);

  function onTagClicked(id: number): void {
    const newTags = [...tags];
    const tag = newTags.find((tag) => tag.id === id);
    if (tag) {
      tag.selected = !tag.selected;
    }
    setTags(newTags);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cards}>
        <p className={styles.header}>Landscape</p>

        {tags.map((tag) => (
          <LandscapeTag tag={tag} key={tag.id} onClick={onTagClicked} />
        ))}
      </div>
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
