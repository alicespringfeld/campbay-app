import * as React from 'react';
import { useState } from 'react';
import useLocations from '../../../utils/useLocations';
import styles from '../DetailCard/DetailCard.module.css';

type LocationProps = {
  address: string;
  landscape: string;
  infrastructure: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  id: number;
};

export default function DetailCard() {
  const [inVisible, setInVisible] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(0);

  return (
    <div className={styles.mainContainer}>
      {inVisible ? (
        <div className={styles.container}>
          <button
            onClick={() => setInVisible(!inVisible)}
            className={styles.swipeAway}
          >
            <img src={'src/assets/Arrow 1.png'} alt={'arrow'} />
          </button>

          {locations!
            .filter((location) => location.id === selectedLocation)
            .map((filteredDetails) => (
              <div>
                {' '}
                id={filteredDetails.id}
                <img
                  className={styles.locationPhoto}
                  src={filteredDetails.imageUrl}
                />
                <div
                  key={filteredDetails.id}
                  className={styles.detailContainer}
                >
                  <div className={styles.addressLine}>
                    Adress:
                    <div className={styles.address}>
                      {filteredDetails.address}
                    </div>
                  </div>
                  <div className={styles.landscapeLine}>
                    Landscape:
                    <div>
                      <img
                        src={`src/assets/DetailCard_IconTags/${filteredDetails.landscape}.svg`}
                        alt={'landicon'}
                        className={styles.iconImage}
                      />
                    </div>
                  </div>
                  <div className={styles.infraLine}>
                    Infrastructure:
                    <img
                      src={`src/assets/DetailCard_IconTags/${filteredDetails.infrastructure}.svg`}
                      alt={'infraicon'}
                      className={styles.infraIcon}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );

  // const [visible, setVisible] = useState(true);

  // return (
  //   <div className={styles.mainContainer}>
  //     {visible && (
  //       <div>
  //         <div className={styles.container}>
  //           <button
  //             onClick={() => setVisible(!visible)}
  //             className={styles.swipeAway}
  //           >
  //             <img src={'src/assets/Arrow 1.png'} alt={'arrow'} />
  //           </button>
  //         </div>

  //         <div>
  //           <img
  //             className={styles.locationImage}
  //             src={'src/assets/5597481_orig-1200x480 2.png'}
  //           />
  //           <section className={styles.detailContainer}>
  //             <div className={styles.addressLine}>Adress:</div>
  //             <div className={styles.landscapeLine}>Landscape:</div>
  //             <div className={styles.infraLine}>Infrastructure:</div>
  //           </section>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
