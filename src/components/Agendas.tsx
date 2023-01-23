const CALENDAR_URL = `https://www.google.com/calendar/render?action=TEMPLATE&text=%E2%9D%A4+Beatriz+%26+Alexander+%E2%9D%A4&details=Com+toda+humildade+e+alegria%2C+damos+a+feliz+not%C3%ADcia+do+nosso+casamento%3A+Beatriz+e+Alexander.+%0A%0ALink+do+convite%3A+%0Ahttps%3A%2F%2Fwww.beatrizealexander.com+%2F+%0A%0A%C3%89+um+prazer+para+n%C3%B3s+se+voc%C3%AA+tamb%C3%A9m+estiver+presente+em+nossa+recep%C3%A7%C3%A3o+e%2Fou+se+dispuser+a+dar+sua+ben%C3%A7%C3%A3o+no+link+acima.%0A%0AObrigado+pela+sua+aten%C3%A7%C3%A3o.%0ABeatriz+e+Alexander&location=S%C3%ADtio+Sol+da+Justi%C3%A7a%2C+R.+Cel.+Alberto+de+Melo%2C+704+-+Vila+de+Cava%2C+Nova+Igua%C3%A7u+-+RJ%2C+26051-560%2C+Brasil&dates=20230723T180000Z%2F20230723T230000Z`;

export function Agendas() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="font-head mb-4 font-medium text-gray-500 md:text-xl">
        Nosso casamento será realizado:
      </div>
      <h3 className="text-cente mb-6 font-sans text-3xl font-black text-gray-700 md:text-4xl">
        DOMINGO, 23 DE JULHO DE 2023
      </h3>
      <div className="mx-auto mb-10 flex max-w-md px-12">
        <a
          href={CALENDAR_URL}
          target={'_blank'}
          className="w-full cursor-pointer rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white outline-4 outline-[#6867AC] transition-all hover:bg-senary disabled:pointer-events-none disabled:opacity-50"
          rel="noreferrer"
        >
          Adicionar ao calendário
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-8 text-center text-2xl font-black md:py-16 md:px-0 md:text-3xl">
        <div className="col-span-1 text-left font-sans text-gray-400 md:text-center">
          BOAS VINDAS
        </div>
        <div className="col-span-1 text-right font-sans text-gray-700 md:text-center">
          15:00
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-8 text-center text-2xl font-black md:py-16 md:px-0  md:text-3xl">
        <div className="col-span-1 text-left font-sans text-gray-400 md:text-center">
          CERIMÔNIA
        </div>
        <div className="col-span-1 text-right font-sans text-gray-700 md:text-center">
          15:00
        </div>
      </div>
    </div>
  );
}
