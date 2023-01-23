import groom from 'assets/alexander.jpg';
import bride from 'assets/beatriz.jpg';

import { TextWithLine } from 'components/TextWithLine';

export function BrideAndGroom() {
  return (
    <div className="pt-20 pb-0">
      <h3 className="Garamond mb-6 text-center font-Cormorant text-5xl font-bold text-gray-700">
        Sobre nós
      </h3>
      <div className="flex w-full flex-wrap pb-20">
        <div className="w-full px-4 md:w-1/2">
          <div className="flex flex-col items-center py-14 text-center sm:px-8 lg:p-20">
            <img
              src={bride}
              alt="Noiva"
              className="mb-8 h-48 w-48 rounded-full bg-primary object-cover"
            />
            <h3 className="font-head mb-4 font-Cormorant text-5xl font-medium text-gray-800">
              Beatriz
            </h3>
            <div className="mb-4">
              <TextWithLine>Noiva</TextWithLine>
            </div>
            <p className="font-Cormorant text-xl leading-6 text-gray-500">
              Nasceu em 18 de dezembro de 1997 em Nova Iguaçu. Filha única de{' '}
              <strong>Ademilton</strong> e <strong>Denise</strong>.
            </p>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2">
          <div className="flex h-full flex-col items-center justify-between py-14 text-center sm:px-8 lg:p-20">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="Noivo"
                className="mb-8 h-48 w-48 rounded-full bg-primary object-cover"
              />
              <h3 className="font-head mb-4 font-Cormorant text-5xl font-medium text-gray-800">
                Alexander
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Noivo</TextWithLine>
              </div>
              <p className="font-Cormorant text-xl leading-6 text-gray-500">
                Nasceu em 31 de março de 1997 em Resende. Filho mais velho de{' '}
                <strong>Alexander</strong> e <strong>Adacilene</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
