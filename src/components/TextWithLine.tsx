interface TextWithLineProps {
  children: React.ReactNode;
}

export function TextWithLine({ children }: TextWithLineProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 border-t border-gray-400" />
      <div className="font-head mx-3 text-center font-medium italic text-gray-600">
        {children}
      </div>
      <div className="w-8 border-t border-gray-400" />
    </div>
  );
}
