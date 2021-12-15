import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Components/SearchBar.module.css';
import SearchIcon from '../../assets/magnifyingglass.svg';
import CancelIcon from '../../assets/X-Icon.svg';
import FilterIcon from '../../assets/Filter_Icon.svg';

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
          <img src={SearchIcon} />
          <input
            className={styles.inputField}
            type="text"
            placeholder="search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.cancel} onClick={clearInput}>
            <img src={CancelIcon} />
          </button>
        </form>
        <Link to="/filter">
          <button className={styles.filter}>
            <img src={FilterIcon} alt="filter" />
          </button>
        </Link>
      </div>
    </>
  );
}
