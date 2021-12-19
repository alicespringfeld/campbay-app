import React from 'react';
import styles from '../Components/FooterBar.module.css';
import AddLocationIcon from '../../assets/AddLocation.svg';
import CancelIcon from '../../assets/X-Icon.svg';
import ArrowBack from '../../assets/ArrowBack.svg';

export default function FooterBar() {
  function deleteItems() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className={styles.container}>
      <a href={'./'} className={styles.arrowBack}>
        <img src={ArrowBack} alt={'arrowBack'} className={styles.arrowIcon} />
      </a>

      <button onClick={deleteItems} className={styles.clearFilter}>
        <img src={CancelIcon} alt={'clearFilter'} />
        <div>Clear Filter</div>
      </button>
    </div>
  );
}
