import { useState } from 'react';

import { SectionWrapper } from 'components/SectionWrapper';

const MAP_EMBEDED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.117674359128!2d-43.44937528440551!3d-22.68666293575822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996855d41430bf%3A0x827307e8eb48b7b1!2sS%C3%ADtio%20Sol%20da%20Justi%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1673909893620!5m2!1spt-BR!2sbr';
const MAP_TITLE = 'Sitio Sol da Justiça';
const MAP_ADDRESS =
  'R. Cel. Alberto de Melo, 704 - Vila de Cava, Nova Iguaçu - RJ, 26051-560, Brasil';

export function LocationMap() {
  const [endereco, setEndereco] = useState('');

  const MAP_REDIRECT_URL = `https://www.google.com/maps/dir/${endereco}/S%C3%ADtio+Sol+da+Justi%C3%A7a+-+Rua+Coronel+Alberto+de+Melo+-+Vila+de+Cava,+Nova+Igua%C3%A7u+-+RJ/@-22.6865849,-43.482206,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x996855d41430bf:0x827307e8eb48b7b1!2m2!1d-43.4471866!2d-22.6866679!3e0`;

  return (
    <div className="bg-[#f9f9f9] py-10">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="rounded-lg bg-white p-2 shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="h-[580px] w-full md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="mb-6 w-full px-4 md:mb-0 md:w-1/2">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="font-head mb-3 text-3xl font-bold text-gray-700">
                Local do Casamento
              </h3>
              <h4 className="mb-4 font-Cormorant text-xl font-semibold text-gray-700 md:text-2xl">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 font-Cormorant text-lg md:mb-10">
                {MAP_ADDRESS}
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
                <input
                  type="text"
                  className="rounded-md border-2 border-transparent bg-gray-100 px-5 py-2 text-lg font-semibold text-gray-700 outline-4 outline-senary transition-all focus:border-primary focus:bg-white focus:outline-none"
                  placeholder="Digite seu endereço de origem"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />

                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="cursor-pointer rounded-md bg-primary px-5 py-2 text-lg font-semibold text-white outline-4 outline-senary transition-all hover:bg-senary disabled:pointer-events-none disabled:opacity-50"
                  rel="noreferrer"
                >
                  Ver rota no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
