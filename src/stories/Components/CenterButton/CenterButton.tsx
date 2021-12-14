import { useMap, useMapEvents } from 'react-leaflet';
import styles from './CenterButton.module.css';

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
      <img
        src="src/assets/FilterIcons_Campbay/navigateIcon.svg"
        alt="navigate"
      />
    </button>
  );
}
