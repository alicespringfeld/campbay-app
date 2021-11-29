import React from 'react';
import styles from '../Components/SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.mainContainer}>
      <form className={styles.container}>
        <img src="../src/assets/magnifyingglass.svg" />
        <input
          className={styles.inputField}
          type="text"
          placeholder="search..."
        />
        <img src="src/assets/X-Icon.svg" className={styles.xIcon} />
      </form>
    </div>
  );
}
