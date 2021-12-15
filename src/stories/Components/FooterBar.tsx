import React from 'react';
import styles from '../Components/FooterBar.module.css';
import AddLocationIcon from '../../assets/AddLocation.svg';

export default function FooterBar() {
  return (
    <div className={styles.container}>
      <img src={AddLocationIcon} />
    </div>
  );
}
