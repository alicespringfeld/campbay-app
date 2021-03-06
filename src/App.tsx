import { useEffect, useState } from 'react';
import './App.css';
import Start from '../src/stories/Pages/Start/Start';
import { Routes, Route } from 'react-router-dom';
import MapOverview from './stories/Pages/MapOverview/MapOverview';
import SearchFilter from './stories/Pages/SearchFilter/SearchFilter';

export default function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/map" element={<MapOverview />} />
        <Route path="/filter" element={<SearchFilter />} />
      </Routes>
    </div>
  );
}
