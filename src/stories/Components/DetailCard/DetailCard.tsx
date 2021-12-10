import React, { useEffect, useState } from 'react';
import MapOverview from '../../Pages/MapOverview/MapOverview';
import styles from './DetailCard.module.css';

export default function DetailCard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <button className={styles.swipeAway}>
          <img src={'src/assets/Arrow 1.png'} alt={'arrow'} />
        </button>
        <img src={'src/assets/5597481_orig-1200x480 2.png'} />
      </div>
      <section className={styles.detailContainer}>
        <div className={styles.addressLine}>Adress:</div>
        <div className={styles.landscapeLine}>Landscape:</div>
        <div className={styles.infraLine}>Infrastructure:</div>
      </section>
    </div>
  );
}
