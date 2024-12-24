interface CardProps {
  icon: React.ReactNode;
  name: string;
  info: string;
  description?: string;
  disabled?: boolean;
}

export function Card({ icon, name, info, description, disabled }: CardProps) {
  return (
    <div
      className="h-52 w-full flex-shrink-0 rounded-[20px] bg-[#d9ef9f] p-6 shadow-lg shadow-[#cbdded] hover:shadow-2xl hover:transition-all md:h-64 md:w-[430px]"
      style={{
        backgroundImage: 'linear-gradient(62deg, #96ac60 0%, #d9ef9f 45%)',
        filter: disabled ? 'grayscale(100%)' : 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <div className="flex h-full flex-col justify-end font-sans text-gray-800">
        <div className="mb-0.5 text-3xl font-medium">{icon}</div>
        <div className="relative mb-4 flex items-center">
          <div className="mr-2 text-2xl font-bold md:text-3xl">{name}</div>
        </div>
        <div className="mb-0.5 font-medium">{description}</div>
        <div className="text-sm font-semibold md:text-xl">{info}</div>
      </div>
    </div>
  );
}
