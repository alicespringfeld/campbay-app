import React from 'react';
import MapOverview from './MapOverview';

export default {
  component: 'MapOverview',
  title: 'Pages/MapOverview',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <MapOverview />;
