import { useEffect, useRef, useState } from 'react';
import { BiPlay, BiPause } from 'react-icons/bi';

interface MusicPlayerProps {
  play?: boolean;
}

export function MusicPlayer({ play: playParent }: MusicPlayerProps) {
  const [play, setPlay] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  const onPlay = async () => {
    if (!audio.current) return;
    await audio.current.play();
    setPlay(true);
  };

  const onPause = async () => {
    if (!audio.current) return;
    audio.current.pause();
    setPlay(false);
  };

  useEffect(() => {
    if (playParent) onPlay();
    else onPause();
  }, [playParent]);

  return (
    <>
      <audio controls ref={audio} loop hidden>
        <source src={'/wedding.mp3'} type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <div className="fixed bottom-0 right-0 z-50 mr-3 mb-3 md:mr-8 md:mb-8">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full  bg-septenary text-4xl drop-shadow-md md:h-11 md:w-11"
          onClick={() => {
            play ? onPause() : onPlay();
          }}
          aria-label="audio-control"
        >
          {play ? <BiPause /> : <BiPlay />}
        </button>
      </div>
    </>
  );
}
