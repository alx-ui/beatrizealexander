import ReactHowler from 'react-howler';
import { BiPlay, BiPause } from 'react-icons/bi';

import music from 'assets/wedding.mp3';

interface MusicPlayerProps {
  play: boolean;
  setPlay: (play: boolean) => void;
}

export function MusicPlayer({ play, setPlay }: MusicPlayerProps) {
  return (
    <>
      <ReactHowler src={music} playing={play} loop volume={0.5} />

      <div className="fixed bottom-0 right-0 z-50 mr-3 mb-3 md:mr-8 md:mb-8">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full  bg-septenary text-4xl drop-shadow-md md:h-11 md:w-11"
          aria-label="audio-control"
          onClick={() => {
            setPlay(!play);
          }}
        >
          {play ? <BiPause /> : <BiPlay />}
        </button>
      </div>
    </>
  );
}
