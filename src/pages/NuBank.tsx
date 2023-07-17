import { useEffect, useState } from 'react';

export function NuBank() {
  const [contdown, setContdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContdown(contdown - 1);
    }, 1000);

    if (contdown === 0) {
      clearTimeout(timer);
      window.location.href = 'https://nubank.com.br/pagar/5eykf/wTts8j93nV';
    }

    return () => clearTimeout(timer);
  }, [contdown]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-center font-Cormorant text-2xl font-bold text-gray-800">
        Você será redirecionado para fazer um pix para o casal ...
        <br />
        <br />
        {contdown}
      </h1>
    </div>
  );
}
