import React from 'react';
import styles from './InfraFilterCard.module.css';

export default function InfraFilterCard() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/dollar-bill 1.svg"
              alt="Costs"
            />
          </button>
          <p>With costs</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/stopwatch 1.svg"
              alt="timelimit"
            />
          </button>
          <p>Time limit</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/toilet 1.svg"
              alt="toilet"
            />
          </button>
          <p>Toilet</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/water-tap 1.svg"
              alt="tapwater"
            />
          </button>
          <p>Tap water</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/fire 1.svg"
              alt="fireplace"
            />
          </button>
          <p>Fireplace allowed</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/trash (1) 1.svg"
              alt="waste"
            />
          </button>
          <p>Fireplace allowed</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img
              src="src/assets/FilterIcons_Campbay/shopping-cart 1.svg"
              alt="shopping"
            />
          </button>
          <p>Shopping facilities</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button className={styles.infraTabs}>
            <img src="src/assets/FilterIcons_Campbay/plug 1.svg" alt="power" />
          </button>
          <p>Power access</p>
        </div>
      </div>
    </section>
  );
}
