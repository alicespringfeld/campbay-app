import React from 'react';
import InfraTag from '../InfraTag/InfraTag';
import styles from './InfraFilterCard.module.css';

const infrastructureTags = [
  {
    text: 'costs',
    src: 'src/assets/FilterIcons_Campbay/costs.svg',
    selected: false,
    id: 0,
  },
  {
    text: 'timelimit',
    src: 'src/assets/FilterIcons_Campbay/timelimit.svg',
    selected: false,
    id: 1,
  },
  {
    text: 'toilet',
    src: 'src/assets/FilterIcons_Campbay/toilet.svg',
    selected: false,
    id: 2,
  },
  {
    text: 'water',
    src: 'src/assets/FilterIcons_Campbay/water.svg',
    selected: false,
    id: 3,
  },
  {
    text: 'fire',
    src: 'src/assets/FilterIcons_Campbay/fire.svg',
    selected: false,
    id: 4,
  },
  {
    text: 'waste',
    src: 'src/assets/FilterIcons_Campbay/waste.svg',
    selected: false,
    id: 5,
  },
  {
    text: 'shopping',
    src: 'src/assets/FilterIcons_Campbay/shopping.svg',
    selected: false,
    id: 6,
  },
  {
    text: 'power',
    src: 'src/assets/FilterIcons_Campbay/power.svg',
    selected: false,
    id: 7,
  },
];

type InfraProps = {
  infraTags?: any;
  setInfratags: any;
};

export default function InfraFilterCard({
  infraTags = infrastructureTags,
  setInfratags,
}: InfraProps) {
  function onInfraTagClicked(id: number): void {
    const newInfraTags = [...infraTags];
    const infraTag = newInfraTags.find((infraTag) => infraTag.id === id);
    if (infraTag) {
      infraTag.selected = !infraTag.selected;
    }
    setInfratags(newInfraTags);
  }

  return (
    <div className={styles.cards}>
      <p className={styles.header}>Infrastructure</p>
      <div className={styles.itag}>
        {infraTags.map((infraTag: any) => (
          <InfraTag
            tag={infraTag}
            key={infraTag.id}
            onClick={onInfraTagClicked}
          />
        ))}
      </div>
    </div>
  );
}
