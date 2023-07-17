import { useEffect, useState } from 'react';

export function Rotas() {
  const [contdown, setContdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContdown(contdown - 1);
    }, 1000);

    if (contdown === 0) {
      clearTimeout(timer);
      window.location.href =
        'https://www.google.com/maps/dir//S%C3%ADtio+Sol+da+Justi%C3%A7a+-+Rua+Coronel+Alberto+de+Melo+-+Vila+de+Cava,+Nova+Igua%C3%A7u+-+RJ/@-22.6871186,-43.4574891,15.04z/data=!4m9!4m8!1m0!1m5!1m1!1s0x996855d41430bf:0x827307e8eb48b7b1!2m2!1d-43.4471866!2d-22.6866679!3e0?entry=ttu';
    }

    return () => clearTimeout(timer);
  }, [contdown]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-center font-Cormorant text-2xl font-bold text-gray-800">
        Você será redirecionado para o Google Maps ...
        <br />
        <br />
        {contdown}
      </h1>
    </div>
  );
}
