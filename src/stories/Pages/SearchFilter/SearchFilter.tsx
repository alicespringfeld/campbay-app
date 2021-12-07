import React from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import LandscapeFilterCard from '../../Components/LandscapeFilterCard/LandscapeFilterCard';
import styles from '../../Pages/SearchFilter/SearchFilter.module.css';

export default function SearchFilter() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.cards}>
        <LandscapeFilterCard />
        <InfraFilterCard />
      </div>
      <div className={styles.footer}>
        <img className={styles.cancel} src="src/assets/X-Icon.svg" />
        <img className={styles.filter} src="src/assets/Filter_Button.svg" />
      </div>
    </div>
  );
}
