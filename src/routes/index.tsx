import { Route, Routes } from 'react-router-dom';

import { ChaDePanela } from 'pages/ChaDePanela';
import { Homepage } from 'pages/Home';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chabar" element={<ChaDePanela />} />
    </Routes>
  );
}
