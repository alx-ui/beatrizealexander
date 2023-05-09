import { memo, useEffect, useState } from 'react';

const EVENT_DATE = '2023-07-23T17:30:00.000Z';
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();

interface COUNTDOWNTYPE {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const countdownBase: COUNTDOWNTYPE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown = memo(() => {
  const [countdown, setCountdown] = useState<COUNTDOWNTYPE>(countdownBase);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const delta = COUNTDOWN_DATE - now;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (delta < 0) {
        clearInterval(interval);
        setCountdown(countdownBase);
      }
    }, 1000);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <div className="font-head mb-10 px-2 pt-10 text-center font-Cormorant text-3xl font-bold text-gray-700">
        <h4 className="mb-1">Contagem Regressiva</h4>
        <h4 className="font-sans">#SAVETHEDATE</h4>
      </div>

      <div className="flex justify-center pb-20">
        <NumberCard number={countdown.days} label="Dia(s)" />
        <NumberCard number={countdown.hours} label="Horas" />
        <NumberCard number={countdown.minutes} label="Minuto(s)" />
        <NumberCard number={countdown.seconds} label="Segundo(s)" />
      </div>
    </div>
  );
});

interface NumberCardProps {
  number: number;
  label: string;
}

const NumberCard = memo(({ number, label }: NumberCardProps) => {
  const numberString = number < 100 ? ('0' + number).slice(-2) : String(number);

  return (
    <div className="mx-2 w-24 rounded-lg bg-[#EFEFEF] px-2 py-7 text-center font-sans text-xs text-gray-700">
      <div className="mb-2 text-3xl">{numberString}</div>
      <div>{label}</div>
    </div>
  );
});

export function CountdownWedding() {
  return <Countdown />;
}
