import * as React from 'react';
import { useState } from 'react';
import useLocations from '../../../utils/useLocations';
import styles from '../DetailCard/DetailCard.module.css';
import ArrowIcon from '../../../assets/ArrowIcon.png';

export type DetailCardProps = {
  imageUrl: string;
  address: string;
  landscape: string;
  infrastructure: string;
  id?: number;
  close?: () => void;
};

export default function DetailCard({
  imageUrl,
  address,
  landscape,
  infrastructure,
  id,
  close,
}: DetailCardProps): JSX.Element {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.close}>
        <img src={ArrowIcon} alt={'arrow'} onClick={close} />
      </div>
      <article className={styles.scrollContent}>
        <img className={styles.locationPhoto} src={imageUrl} />
        <div className={styles.addressLine}>
          <span>Adress:</span>
          <span className={styles.address}>{address}</span>
        </div>

        <div className={styles.landscapeLine}>
          <span> Landscape: </span>
          <img src={landscape} alt={'landicon'} className={styles.iconImage} />
        </div>
        <div className={styles.infraLine}>
          <span>Infrastructure:</span>
          <img
            src={infrastructure}
            alt={'infraicon'}
            className={styles.iconImage}
          />
        </div>
      </article>
    </main>
  );
}
