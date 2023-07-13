import { BiShoppingBag } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { Card } from 'components/Card';

export function DigitalEnvelope() {
  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="font-head mb-14 pt-10 text-center text-3xl font-bold text-gray-700">
        Nossas listas de casamento
      </h4>

      <div className=" flex flex-col justify-evenly md:flex-row md:flex-wrap">
        <Link
          className="mb-10 px-4"
          to="/riachuelo"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            icon={<BiShoppingBag />}
            name="Riachuelo"
            info="Lista de Presentes"
            description="Clique para acessar a lista"
          />
        </Link>
        <Link
          className="mb-10 px-4"
          to="/casasbahia"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            icon={<BiShoppingBag />}
            name="Casas Bahia"
            info="Lista de Presentes"
            description="Clique para acessar a lista"
          />
        </Link>
        <Link className="mb-10 px-4" to="/pix" target="_blank" rel="noreferrer">
          <Card
            icon={<MdPayment />}
            name="Ajude na Lua de Mel"
            info="casal@beatrizealexander.com"
            description="Faça um pix para o casal. Chave pix:"
          />
        </Link>
        <Link
          className="mb-10 px-4"
          to="/filtro"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            icon={<SiInstagram />}
            name="Filtro no Instagram"
            info="Use #beatrizealexander para pegar sua foto no Instaclick"
            description="Não esqueça de nos marcar."
          />
        </Link>
      </div>
    </div>
  );
}
