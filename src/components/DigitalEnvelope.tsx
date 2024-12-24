import { Link } from 'react-router';

import { ShoppingBag, PixLogo, InstagramLogo } from '@phosphor-icons/react';

import { Card } from 'components/Card';

export function DigitalEnvelope() {
  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="font-head mb-14 pt-10 text-center text-3xl font-bold text-gray-700">
        Nossas listas de casamento
      </h4>

      <div className="flex flex-col justify-evenly md:flex-row md:flex-wrap">
        <div className="mb-10 px-4">
          <Card
            icon={<ShoppingBag />}
            name="Riachuelo"
            info="Lista de Presentes"
            description="Clique para acessar a lista"
            disabled
          />
        </div>
        <div className="mb-10 px-4">
          <Card
            icon={<ShoppingBag />}
            name="Casas Bahia"
            info="Lista de Presentes"
            description="Clique para acessar a lista"
            disabled
          />
        </div>
        <Link className="mb-10 px-4" to="/pix" target="_blank" rel="noreferrer">
          <Card
            icon={<PixLogo />}
            name="Ajude na Lua de Mel"
            info="casal@beatrizealexander.com"
            description="Faça um pix para o casal. Chave pix:"
          />
        </Link>
        <div className="mb-10 px-4">
          <Card
            icon={<InstagramLogo />}
            name="Filtro no Instagram"
            info="Use #beatrizealexander para pegar sua foto no Instaclick"
            description="Não esqueça de nos marcar."
            disabled
          />
        </div>
      </div>
    </div>
  );
}
