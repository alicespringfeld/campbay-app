import React from 'react';
import styles from './Start.module.css';
import Button from '../Components/Button';

export default function Start(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <img src="src/assets/Logo.png" alt="logo" className={styles.logo} />
        <Button />
      </div>
    </div>
  );
}
