import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-screen">
      <div className="fixed box-border flex h-screen w-screen flex-row items-start justify-center overflow-auto bg-[#EFEFEF] py-20">
        <div className="my-auto flex w-full flex-col items-center p-5 md:w-[500]">
          <h5 className="mb-2 text-center font-Cormorant text-5xl font-medium text-gray-500 md:mb-3 md:text-6xl">
            404
          </h5>
          <h4 className="mb-6 text-center font-Cormorant text-2xl text-gray-800 md:text-3xl">
            Opa, essa página que você está procurando não existe!
          </h4>

          <button
            type="button"
            className="cursor-pointer rounded-md bg-primary px-5 py-3 font-sans font-medium text-white outline-4 outline-primary transition-all hover:bg-senary disabled:pointer-events-none disabled:opacity-50"
            onClick={() => navigate('/')}
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  );
}
