import React from 'react';
import LandscapeTag from './LandscapeTag';

export default {
  component: LandscapeTag,
  title: 'Components/LandscapeTag',
};

export const Forrest = () => (
  <LandscapeTag
    tag={{
      text: 'Forrest',
      src: 'src/assets/FilterIcons_Campbay/Forrest_Icon.svg',
      selected: true,
      id: 1,
    }}
    onClick={() => ''}
  />
);

export const Field = () => (
  <LandscapeTag
    tag={{
      text: 'Field',
      src: 'src/assets/FilterIcons_Campbay/fields 1.svg',
      selected: false,
      id: 2,
    }}
    onClick={() => ''}
  />
);
