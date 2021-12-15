import React, { useEffect, useState } from 'react';
import InfraFilterCard from '../../Components/InfraFilterCard/InfraFilterCard';
import LandscapeFilterCard from '../../Components/LandscapeFilterCard/LandscapeFilterCard';
import styles from './SearchFilter.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import FilterIcon from '../../../assets/Filter_Button.svg';
import CancelIcon from '../../../assets/X-Icon.svg';

export default function SearchFilter(): JSX.Element {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [ltags, setLTags] = useState<any[]>([]);
  const [infraTags, setInfraTags] = useState<any[]>([]);
  const navigate = useNavigate();

  // console.log(filteredLocations);

  const disabledOptions =
    infraTags!.filter((tag) => tag.selected)?.length &&
    ltags!.filter((tag) => tag.selected)?.length;

  // Get array of filtered Locations
  async function getFilteredLocations(): Promise<void> {
    if (infraTags && ltags) {
      const selectedInfraTags = infraTags.filter((tag) => tag.selected);
      const selectedLandscapeTags = ltags.filter((tag) => tag.selected);
      const params = new URLSearchParams();
      params.append(
        'infrastructure',
        selectedInfraTags[0]?.text?.toLowerCase()
      );
      params.append('landscape', selectedLandscapeTags[0]?.text?.toLowerCase());
      const response = await fetch(`api/locations/search?${params.toString()}`);
      const body = await response.json();
      // console.log({ body });
      setFilteredLocations(body);
      localStorage.setItem('filtered', JSON.stringify(filteredLocations));
      navigate('/map');
    }
  }

  return (
    <div className={styles.pageContainer}>
      <LandscapeFilterCard setLandTags={setLTags} />
      <InfraFilterCard setInfratags={setInfraTags} />
      <footer className={styles.footer}>
        <Link to="/map">
          <button className={styles.cancel}>
            <img src={CancelIcon} />
          </button>
        </Link>

        <button
          type="submit"
          onClick={getFilteredLocations}
          className={styles.filter}
          disabled={!disabledOptions}
        >
          <img src={FilterIcon} />
        </button>
      </footer>
    </div>
  );
}
