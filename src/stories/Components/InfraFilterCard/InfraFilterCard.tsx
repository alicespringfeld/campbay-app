import React from 'react';
import InfraTag from '../InfraTag/InfraTag';
import styles from './InfraFilterCard.module.css';
import Costs from '../../../assets/FilterIcons_Campbay/costs.png';
import Timelimit from '../../../assets/FilterIcons_Campbay/timelimit.png';
import Toilet from '../../../assets/FilterIcons_Campbay/toilet.png';
import Water from '../../../assets/FilterIcons_Campbay/water.png';
import Fire from '../../../assets/FilterIcons_Campbay/fire.png';
import Waste from '../../../assets/FilterIcons_Campbay/waste.png';
import Shopping from '../../../assets/FilterIcons_Campbay/shopping.png';
import Power from '../../../assets/FilterIcons_Campbay/power.png';

const infrastructureTags = [
  {
    text: 'costs',
    src: Costs,
    selected: false,
    id: 0,
  },
  {
    text: 'timelimit',
    src: Timelimit,
    selected: false,
    id: 1,
  },
  {
    text: 'toilet',
    src: Toilet,
    selected: false,
    id: 2,
  },
  {
    text: 'water',
    src: Water,
    selected: false,
    id: 3,
  },
  {
    text: 'fire',
    src: Fire,
    selected: false,
    id: 4,
  },
  {
    text: 'waste',
    src: Waste,
    selected: false,
    id: 5,
  },
  {
    text: 'shopping',
    src: Shopping,
    selected: false,
    id: 6,
  },
  {
    text: 'power',
    src: Power,
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
