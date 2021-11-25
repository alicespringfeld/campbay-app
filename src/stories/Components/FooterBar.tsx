import React from 'react';
import styles from '../Components/FooterBar.module.css';
import AddLocationIcon from './AddLocationIcon';

export default function FooterBar() {
  return (
    <div className={styles.container}>
      <AddLocationIcon />
    </div>
  );
}
