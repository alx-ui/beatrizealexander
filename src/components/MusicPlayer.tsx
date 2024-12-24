import { useState } from 'react';
import ReactHowler from 'react-howler';

import {
  CaretLeft,
  CaretRight,
  Minus,
  Pause,
  Play,
  Plus,
} from '@phosphor-icons/react';
import music from 'assets/wedding.mp3';

interface MusicPlayerProps {
  play: boolean;
  setPlay: (play: boolean) => void;
}

export function MusicPlayer({ play, setPlay }: MusicPlayerProps) {
  const [volumeChange, setVolumeChange] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);

  function volumePorcentage() {
    const porcentage = Math.round(volumeChange * 100);

    if (porcentage <= 0) return '0%';
    if (porcentage >= 100) return '100%';

    return `${porcentage}%`;
  }

  return (
    <>
      <ReactHowler src={music} playing={play} loop volume={volumeChange} />

      <div className="fixed bottom-0 right-0 z-50 mb-3 mr-3 flex gap-2 md:mb-8 md:mr-8">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-septenary text-4xl drop-shadow-md md:h-11 md:w-11"
          aria-label="audio-control"
          onClick={() => {
            setPlay(!play);
          }}
        >
          {play ? <Pause size={24} /> : <Play size={24} />}
        </button>
        {showVolume && (
          <>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-septenary text-4xl drop-shadow-md md:h-11 md:w-11"
              aria-label="audio-control"
              onClick={() => {
                if (volumeChange <= 0) return;
                setVolumeChange(volumeChange - 0.1);
              }}
            >
              <Minus className="text-2xl" size={24} />
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-septenary text-4xl drop-shadow-md md:h-11 md:w-11"
              aria-label="audio-control"
              onClick={() => {
                if (volumeChange >= 1) return;
                setVolumeChange(volumeChange + 0.1);
              }}
            >
              <Plus className="text-2xl" size={24} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-septenary text-lg drop-shadow-md md:h-11 md:w-11">
              {volumePorcentage()}
            </div>
          </>
        )}

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-septenary text-4xl drop-shadow-md md:h-11 md:w-11"
          aria-label="audio-control"
          onClick={() => {
            setShowVolume(!showVolume);
          }}
        >
          {showVolume ? (
            <CaretRight className="text-2xl" size={24} />
          ) : (
            <CaretLeft className="text-2xl" size={24} />
          )}
        </button>
      </div>
    </>
  );
}
