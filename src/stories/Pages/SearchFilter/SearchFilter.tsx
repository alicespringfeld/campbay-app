import React, { useState } from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import LandscapeFilterCard from '../../Components/LandscapeFilterCard/LandscapeFilterCard';
import styles from './SearchFilter.module.css';

export default function SearchFilter(): JSX.Element {
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
