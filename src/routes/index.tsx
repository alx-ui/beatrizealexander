import { Route, Routes } from 'react-router-dom';

import { CasasBahia } from 'pages/CasasBahia';
import { ChaDePanela } from 'pages/ChaDePanela';
import { Homepage } from 'pages/Home';
import { Links } from 'pages/Links';
import { NotFound } from 'pages/NotFound';
import { Riachuelo } from 'pages/Riachuelo';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chabar" element={<ChaDePanela />} />
      <Route path="/riachuelo" element={<Riachuelo />} />
      <Route path="/casasbahia" element={<CasasBahia />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
