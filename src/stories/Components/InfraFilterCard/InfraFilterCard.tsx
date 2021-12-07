import React, { useState } from 'react';
import styles from './InfraFilterCard.module.css';

export default function InfraFilterCard() {
  const [costsSelected, setCostsSelected] = useState('var(--color-tabs)');
  const [timeSelected, setTimeSelected] = useState('var(--color-tabs)');
  const [toiletSelected, setToiletSelected] = useState('var(--color-tabs)');
  const [waterSelected, setWaterSelected] = useState('var(--color-tabs)');
  const [fireSelected, setFireSelected] = useState('var(--color-tabs)');
  const [wasteSelected, setWasteSelected] = useState('var(--color-tabs)');
  const [shoppingSelected, setShoppingSelected] = useState('var(--color-tabs)');
  const [powerSelected, setPowerSelected] = useState('var(--color-tabs)');

  return (
    <div className={styles.mainContainer}>
      <article>
        <p className={styles.header}>Infrastructure</p>
      </article>

      <div className={styles.tabContainer}>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              costsSelected === 'var(--color-tabs)'
                ? setCostsSelected('green')
                : setCostsSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: costsSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/dollar-bill 1.svg"
              alt="Costs"
            />
          </button>
          <p>With costs</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              timeSelected === 'var(--color-tabs)'
                ? setTimeSelected('green')
                : setTimeSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: timeSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/stopwatch 1.svg"
              alt="timelimit"
            />
          </button>
          <p>Time limit</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              toiletSelected === 'var(--color-tabs)'
                ? setToiletSelected('green')
                : setToiletSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: toiletSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/toilet 1.svg"
              alt="toilet"
            />
          </button>
          <p>Toilet</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              waterSelected === 'var(--color-tabs)'
                ? setWaterSelected('green')
                : setWaterSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: waterSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/water-tap 1.svg"
              alt="tapwater"
            />
          </button>
          <p>Tap water</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              fireSelected === 'var(--color-tabs)'
                ? setFireSelected('green')
                : setFireSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: fireSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/fire 1.svg"
              alt="fireplace"
            />
          </button>
          <p>Fireplace allowed</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              wasteSelected === 'var(--color-tabs)'
                ? setWasteSelected('green')
                : setWasteSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: wasteSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/trash (1) 1.svg"
              alt="waste"
            />
          </button>
          <p>Waste disposal</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              shoppingSelected === 'var(--color-tabs)'
                ? setShoppingSelected('green')
                : setShoppingSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: shoppingSelected }}
            className={styles.infraTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/shopping-cart 1.svg"
              alt="shopping"
            />
          </button>
          <p>Shopping facilities</p>
        </div>

        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              powerSelected === 'var(--color-tabs)'
                ? setPowerSelected('green')
                : setPowerSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: powerSelected }}
            className={styles.infraTabs}
          >
            <img src="src/assets/FilterIcons_Campbay/plug 1.svg" alt="power" />
          </button>
          <p>Power access</p>
        </div>
      </div>
    </div>
  );
}
