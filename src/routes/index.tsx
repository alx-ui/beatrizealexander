import { Route, Routes } from 'react-router-dom';

import { ChaDePanela } from 'pages/ChaDePanela';
import { Homepage } from 'pages/Home';
import { Links } from 'pages/Links';
import { NotFound } from 'pages/NotFound';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chabar" element={<ChaDePanela />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
