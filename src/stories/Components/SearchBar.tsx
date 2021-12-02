import React, { useState } from 'react';
import styles from '../Components/SearchBar.module.css';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  function clearInput(e: { preventDefault: () => void }) {
    e.preventDefault();
    setInputValue('');
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.container}>
        <img src="../src/assets/magnifyingglass.svg" />
        <input
          className={styles.inputField}
          type="text"
          placeholder="search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.cancel} onClick={clearInput}>
          <img src="src/assets/X-Icon.svg" />
        </button>
      </form>
    </div>
  );
}
