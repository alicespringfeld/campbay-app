import React from 'react';
import styles from './Start.module.css';
// import Logo from '../../../assets/Logo.png';
import LogoWithoutIcon from '../../../assets/LogoWithoutIcon.png';
import LogoIcon from '../../../assets/CamperIcon_white.png';

export default function Start(): JSX.Element {
  return (
    <div className={styles.container}>
      <section className={styles.logoContainer}>
        <img src={LogoIcon} alt="logoIcon" className={styles.logoIcon} />
        <span className={styles.logoText}>CampBay</span>
      </section>
      <a href={'/map'} className={styles.startTab}>
        Find your Bay!
      </a>
    </div>
  );
}
