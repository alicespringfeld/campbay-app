import { useMap, useMapEvents } from 'react-leaflet';
import styles from './CenterButton.module.css';
import NavigateIcon from '../../../assets/navigateIcon.svg';

export default function CenterButton({ setPosition }: any) {
  const map = useMap();
  const locateAndFly = () => {
    map.locate({ setView: true, maxZoom: map.getZoom() });
  };

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return (
    <button className={styles.navigateButton} onClick={() => locateAndFly()}>
      <img src={NavigateIcon} alt="navigate" />
    </button>
  );
}
