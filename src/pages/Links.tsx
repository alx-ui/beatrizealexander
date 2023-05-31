import { Link } from 'react-router-dom';

import heroBgMobile from 'assets/hero-bg-mobile.jpg';

import { SectionWrapper } from 'components/SectionWrapper';

export function Links() {
  return (
    <div
      style={{
        fontFamily: 'Cormorant Garamond',
        lineHeight: '1.4',
      }}
      className="h-screen bg-[#efefef]"
    >
      <SectionWrapper className="bg-[#efefef]">
        <div className="h-screen w-full px-1 md:px-4">
          <div className="flex items-center justify-center pt-10">
            <img
              src={heroBgMobile}
              alt="hero-bg-mobile"
              className="h-52 w-52 rounded-full object-cover"
            />
          </div>

          <h4 className="font-head mb-14 pt-10 text-center text-3xl font-bold text-gray-700">
            Nossas listas de casamento
          </h4>
          <div className=" flex flex-col justify-evenly">
            <a
              href="#"
              type="button"
              className="mb-4 cursor-pointer rounded-md bg-primary py-3 text-center font-sans font-medium text-white outline-4 outline-primary transition-all hover:bg-senary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:mb-10"
            >
              Confirmar presença
            </a>

            <Link
              to="/"
              type="button"
              className="mb-4 cursor-pointer rounded-md bg-primary py-3 text-center font-sans font-medium text-white outline-4 outline-primary transition-all hover:bg-senary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:mb-10"
            >
              Site dos noivos
            </Link>

            <Link
              to="/riachuelo"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="mb-4 cursor-pointer rounded-md bg-primary py-3 text-center font-sans font-medium text-white outline-4 outline-primary transition-all hover:bg-senary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:mb-10"
            >
              Lista de presentes • Riachuelo
            </Link>

            <Link
              to="/casasbahia"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="mb-4 cursor-pointer rounded-md bg-primary py-3 text-center font-sans font-medium text-white outline-4 outline-primary transition-all hover:bg-senary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:mb-10"
            >
              Lista de presentes • Casas Bahia
            </Link>
          </div>
        </div>
      </SectionWrapper>
      <div className="relative bg-[#efefef] pb-3 text-center font-sans text-gray-700">
        © {new Date().getFullYear()} feito com 💚 por{' '}
        <a
          className="font-semibold hover:text-primary"
          href="https://www.ialexanderbrito.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          ialexanderbrito
        </a>
      </div>
    </div>
  );
}
