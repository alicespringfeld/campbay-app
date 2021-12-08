import React from 'react';
import InfraTag from './InfraTag';

export default {
  component: InfraTag,
  title: 'Components/InfraTag',
};

export const Timelimit = () => (
  <InfraTag
    tag={{
      text: 'Timelimit',
      src: 'src/assets/FilterIcons_Campbay/stopwatch 1.svg',
      selected: true,
      id: 2,
    }}
    onClick={() => ''}
  />
);

export const Field = () => (
  <InfraTag
    tag={{
      text: 'Toilet',
      src: 'src/assets/FilterIcons_Campbay/toilet 1.svg',
      selected: false,
      id: 3,
    }}
    onClick={() => ''}
  />
);
