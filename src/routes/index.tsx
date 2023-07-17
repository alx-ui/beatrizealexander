import { Route, Routes } from 'react-router-dom';

import { CasasBahia } from 'pages/CasasBahia';
import { Filtro } from 'pages/Filtro';
import { Homepage } from 'pages/Home';
import { Links } from 'pages/Links';
import { NotFound } from 'pages/NotFound';
import { NuBank } from 'pages/NuBank';
import { Riachuelo } from 'pages/Riachuelo';
import { Rotas } from 'pages/Routes';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/riachuelo" element={<Riachuelo />} />
      <Route path="/casasbahia" element={<CasasBahia />} />
      <Route path="/pix" element={<NuBank />} />
      <Route path="/filtro" element={<Filtro />} />
      <Route path="/links" element={<Links />} />
      <Route path="/rotas" element={<Rotas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
