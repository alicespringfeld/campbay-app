import React, { useEffect, useState } from 'react';
import styles from '../Components/SearchBar.module.css';

type SearchFormProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchFormProps) {
  const [inputValue, setInputValue] = useState('');

  function clearInput(e: { preventDefault: () => void }) {
    e.preventDefault();
    setInputValue('');
  }

  useEffect(() => {
    if (inputValue.length === 0) {
      onSearch('');
    }
    const timeoutId = setTimeout(() => {
      onSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return (
    <>
      <div className={styles.header}>
        <form className={styles.container + ' ' + styles.searchBar}>
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
        <button className={styles.filter}>
          <img src="src/assets/Filter_Icon.svg" alt="filter" />
        </button>
      </div>
    </>
  );
}
