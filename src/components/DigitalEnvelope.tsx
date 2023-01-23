import { BiShoppingBag } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { SiInstagram } from 'react-icons/si';

import { Card } from 'components/Card';

export function DigitalEnvelope() {
  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="font-head mb-14 pt-10 text-center text-3xl font-bold text-gray-700">
        Nossas listas de casamento
      </h4>

      <div className=" flex flex-col justify-evenly md:flex-row md:flex-wrap">
        <a
          className="mb-10 px-4"
          href="https://www.domeujeito.com.br/lista/230723"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            icon={<BiShoppingBag />}
            name="Riachuelo"
            info="Lista de Presentes"
            description="Clique para acessar a lista"
          />
        </a>
        <a
          className="mb-10 px-4"
          href="https://listas.casasbahia.com.br/alexanderebeatriz"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            icon={<BiShoppingBag />}
            name="Casas Bahia"
            info="Lista de Presentes"
            description="Clique para acessar a lista"
          />
        </a>
        <a
          className="mb-10 px-4"
          href="https://nubank.com.br/pagar/5eykf/R5C9psuMcy"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            icon={<MdPayment />}
            name="Ajude na Lua de Mel"
            info="casal@beatrizealexander.com"
            description="Faça um pix para o casal. Chave pix:"
          />
        </a>
        <a className="mb-10 px-4" href="/" onClick={(e) => e.preventDefault()}>
          <Card
            icon={<SiInstagram />}
            name="Filtro no Instagram"
            info="Use #beatrizealexander para poder retirar sua foto no Instaclick"
            description="Não esqueça de nos marcar."
            disabled
          />
        </a>
      </div>
    </div>
  );
}
