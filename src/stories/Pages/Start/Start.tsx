import React from 'react';
import styles from './Start.module.css';
import Logo from '../../../assets/Logo.png';

export default function Start(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <img src={Logo} alt="campBayLogo" className={styles.logo} />
        <a href={'/map'} className={styles.startTab}>
          Find your Bay!
        </a>
      </div>
    </div>
  );
}
