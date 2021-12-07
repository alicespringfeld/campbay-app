import React from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import LandscapeFilterCard from '../../Components/LandscapeFilterCard/LandscapeFilterCard';
import styles from '../../Pages/SearchFilter/SearchFilter.module.css';

export default function SearchFilter() {
  return (
    <div className={styles.pageContainer}>
      <LandscapeFilterCard />
      <InfraFilterCard />
    </div>
  );
}
