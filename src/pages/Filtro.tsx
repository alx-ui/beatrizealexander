import { useEffect, useState } from 'react';

export function Filtro() {
  const [contdown, setContdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContdown(contdown - 1);
    }, 1000);

    if (contdown === 0) {
      clearTimeout(timer);
      window.location.href = 'https://www.instagram.com/ar/3325205207791281/';
    }

    return () => clearTimeout(timer);
  }, [contdown]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-center font-Cormorant text-2xl font-bold text-gray-800">
        Você será redirecionado para usar o filtro do casal no Instagram ...
        <br />
        <br />
        {contdown}
      </h1>
    </div>
  );
}
