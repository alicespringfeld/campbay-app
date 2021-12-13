import React from 'react';
import InfraTag from '../InfraTag/InfraTag';
import styles from './InfraFilterCard.module.css';

const INFRA_TAGS = [
  {
    text: 'Costs',
    src: 'src/assets/FilterIcons_Campbay/costs.svg',
    selected: false,
    id: 0,
  },
  {
    text: 'Timelimit',
    src: 'src/assets/FilterIcons_Campbay/timelimit.svg',
    selected: false,
    id: 1,
  },
  {
    text: 'Toilet',
    src: 'src/assets/FilterIcons_Campbay/toilet.svg',
    selected: false,
    id: 2,
  },
  {
    text: 'Water',
    src: 'src/assets/FilterIcons_Campbay/water.svg',
    selected: false,
    id: 3,
  },
  {
    text: 'Fireplace allowed',
    src: 'src/assets/FilterIcons_Campbay/fire.svg',
    selected: false,
    id: 4,
  },
  {
    text: 'Waste disposal',
    src: 'src/assets/FilterIcons_Campbay/waste.svg',
    selected: false,
    id: 5,
  },
  {
    text: 'Shopping facilities',
    src: 'src/assets/FilterIcons_Campbay/shopping.svg',
    selected: false,
    id: 6,
  },
  {
    text: 'Power access',
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
  infraTags = INFRA_TAGS,
  setInfratags,
}: InfraProps) {
  function onITagClicked(id: number): void {
    const newITags = [...infraTags];
    const itag = newITags.find((itag) => itag.id === id);
    if (itag) {
      itag.selected = !itag.selected;
    }
    setInfratags(newITags);
  }

  return (
    <div className={styles.cards}>
      <p className={styles.header}>Infrastructure</p>
      <div className={styles.itag}>
        {infraTags.map((itag: any) => (
          <InfraTag tag={itag} key={itag.id} onClick={onITagClicked} />
        ))}
      </div>
    </div>
  );
}
