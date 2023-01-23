import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import heroBgMobile from 'assets/hero-bg-mobile.jpg';
import heroBg from 'assets/hero-bg.jpg';

import { Agendas } from 'components/Agendas';
import { BrideAndGroom } from 'components/BrideAndGroom';
import { CountdownWedding } from 'components/Countdown';
import { DigitalEnvelope } from 'components/DigitalEnvelope';
import { GalleryPhotos } from 'components/GalleryPhotos';
import { Information } from 'components/Information';
import { LocationMap } from 'components/LocationMap';
import { MusicPlayer } from 'components/MusicPlayer';
import { SectionWrapper } from 'components/SectionWrapper';

export function Homepage() {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div
      style={{
        fontFamily: 'Cormorant Garamond',
        lineHeight: '1.4',
      }}
      className="bg-[#f9f9f9]"
    >
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat md:h-[750px]"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1">
          <h4 className="mb-4 text-center font-Cormorant text-5xl font-bold text-[#EFEFEF]">
            Beatriz & Alexander
          </h4>
          <div className="text-md border-t-2 border-primary pt-3 text-center font-sans font-black italic text-[#EFEFEF]">
            23.07.2023
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="flex flex-col items-center justify-center ">
          <h5 className="font-head mb-4 mt-4 text-center text-2xl font-bold text-gray-700">
            vão se casar com as bênçãos de seus pais
          </h5>
          <h5 className="font-head ml-1 text-center text-3xl font-bold text-gray-700">
            Denise e Ademilton
          </h5>
          <h5 className="font-head ml-1 text-center text-3xl font-bold text-gray-700">
            &
          </h5>
          <h5 className="font-head ml-1 mb-4 text-center text-3xl font-bold text-gray-700">
            Adacilene e Alexander
          </h5>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#efefef]">
        <BrideAndGroom />

        <Information />
      </SectionWrapper>

      <SectionWrapper className="mb-2 pt-1">
        <CountdownWedding />
      </SectionWrapper>

      <SectionWrapper className="mb-2">
        <Agendas />
      </SectionWrapper>

      <SectionWrapper className="bg-[#efefef]">
        <DigitalEnvelope />
      </SectionWrapper>

      <div className="mb-2">
        <LocationMap />

        <div className="elfsight-app-888e4920-bc26-4be5-948f-327fd8aaaaba"></div>
      </div>

      <SectionWrapper className="mb-2">
        <GalleryPhotos />
      </SectionWrapper>

      <div className="relative bg-[#efefef] py-24 text-center font-sans text-gray-700">
        © {new Date().getFullYear()} feito por{' '}
        <a
          className="font-semibold hover:text-primary"
          href="https://www.ialexanderbrito.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          ialexanderbrito
        </a>
      </div>

      <MusicPlayer play={true} />
    </div>
  );
}
