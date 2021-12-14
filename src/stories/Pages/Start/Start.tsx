import React from 'react';
import styles from './Start.module.css';
import Button from '../../Components/Button';
import Logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Start(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <Link to="/map">
          <Button />
        </Link>
      </div>
    </div>
  );
}
