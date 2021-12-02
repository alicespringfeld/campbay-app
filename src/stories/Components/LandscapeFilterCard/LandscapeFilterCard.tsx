import React from 'react';
import styles from './LandscapeFilterCard.module.css';

export default function LandscapeFilterCard() {
  return (
    <section className={styles.mainContainer}>
      <p className={styles.header}>Landscape</p>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.landscapeTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/Forrest_Icon.svg"
              alt="Forrest"
            />
          </button>
          <p>Forrest</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button className={styles.landscapeTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/mountain 1.svg"
              alt="Mountains"
            />
          </button>
          <p>Mountains</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button className={styles.landscapeTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/fields 1.svg"
              alt="Field"
            />
          </button>
          <p>Field</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button className={styles.landscapeTabs}>
            <img src="src/assets/FilterIcons_Campbay/river 1.svg" alt="River" />
          </button>
          <p>River</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button className={styles.landscapeTabs}>
            <img src="src/assets/FilterIcons_Campbay/lake 1.svg" alt="Lake" />
          </button>
          <p>Lake</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button className={styles.landscapeTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/cityscape 1.svg"
              alt="City"
            />
          </button>
          <p>City</p>
        </div>
      </div>
    </section>
  );
}
