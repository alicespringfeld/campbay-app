import React, { useState } from 'react';
import styles from './LandscapeFilterCard.module.css';

export default function LandscapeFilterCard() {
  const [forrestSelected, setForrestSelected] = useState('var(--color-tabs)');
  const [mountainSelected, setMountainSelected] = useState('var(--color-tabs)');
  const [fieldSelected, setFieldSelected] = useState('var(--color-tabs)');
  const [riverSelected, setRiverSelected] = useState('var(--color-tabs)');
  const [lakeSelected, setLakeSelected] = useState('var(--color-tabs)');
  const [citySelected, setCitySelected] = useState('var(--color-tabs)');

  //const changeColor = () => {
  //setButtonColor('selectButton');
  //};

  return (
    <section className={styles.mainContainer}>
      <p className={styles.header}>Landscape</p>
      <div className={styles.container}>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              forrestSelected === 'var(--color-tabs)'
                ? setForrestSelected('green')
                : setForrestSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: forrestSelected }}
            className={styles.landscapeTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/Forrest_Icon.svg"
              alt="Forrest"
            />
          </button>

          <p>Forrest</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              mountainSelected === 'var(--color-tabs)'
                ? setMountainSelected('green')
                : setMountainSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: mountainSelected }}
            className={styles.landscapeTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/mountain 1.svg"
              alt="Mountains"
            />
          </button>
          <p>Mountains</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              fieldSelected === 'var(--color-tabs)'
                ? setFieldSelected('green')
                : setFieldSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: fieldSelected }}
            className={styles.landscapeTabs}
          >
            <img
              src="src/assets/FilterIcons_Campbay/fields 1.svg"
              alt="Field"
            />
          </button>
          <p>Field</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              riverSelected === 'var(--color-tabs)'
                ? setRiverSelected('green')
                : setRiverSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: riverSelected }}
            className={styles.landscapeTabs}
          >
            <img src="src/assets/FilterIcons_Campbay/river 1.svg" alt="River" />
          </button>
          <p>River</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              lakeSelected === 'var(--color-tabs)'
                ? setLakeSelected('green')
                : setLakeSelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: lakeSelected }}
            className={styles.landscapeTabs}
          >
            <img src="src/assets/FilterIcons_Campbay/lake 1.svg" alt="Lake" />
          </button>
          <p>Lake</p>
        </div>
        <div className={styles.tabsTextContainer}>
          <button
            onClick={() => {
              citySelected === 'var(--color-tabs)'
                ? setCitySelected('green')
                : setCitySelected('var(--color-tabs)');
            }}
            style={{ backgroundColor: citySelected }}
            className={styles.landscapeTabs}
          >
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
