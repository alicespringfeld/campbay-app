import * as React from 'react';
import { useState } from 'react';
import useLocations from '../../../utils/useLocations';
import styles from '../DetailCard/DetailCard.module.css';

export default function DetailCard() {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.mainContainer}>
      {visible && (
        <div>
          <div className={styles.container}>
            <button
              onClick={() => setVisible(!visible)}
              className={styles.swipeAway}
            >
              <img src={'src/assets/Arrow 1.png'} alt={'arrow'} />
            </button>
          </div>

          <div>
            <img
              className={styles.locationImage}
              src={'src/assets/5597481_orig-1200x480 2.png'}
            />
            <section className={styles.detailContainer}>
              <div className={styles.addressLine}>Adress:</div>
              <div className={styles.landscapeLine}>Landscape:</div>
              <div className={styles.infraLine}>Infrastructure:</div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
