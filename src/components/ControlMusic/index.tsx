import { useState } from "react";
import {
  BackwardIcon,
  ForwardIcon,
  PlayCircleIcon,
  PauseCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import Tippy from "@tippyjs/react/headless";
import { playlist } from "@/data/PlayList";


const ControlMusic = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const iconStyle =
    "w-8 h-8 rounded-md text-white p-1 mx-2 cursor-pointer hover:scale-[1.1] hover:bg-red-primary transition duration-400";
  const handleChangePlaylist = (playlist: string): void => {
    console.log(playlist);
  };
  return (
    <div className="flex">
      <BackwardIcon className={iconStyle} />
      {isPlaying ? (
        <PlayCircleIcon
          className={iconStyle}
          onClick={() => setIsPlaying(!isPlaying)}
        />
      ) : (
        <PauseCircleIcon
          className={iconStyle}
          onClick={() => setIsPlaying(!isPlaying)}
        />
      )}
      <ForwardIcon className={iconStyle} />
      {isMuted ? (
        <SpeakerXMarkIcon
          className={iconStyle}
          onClick={() => setIsMuted(!isMuted)}
        />
      ) : (
        <SpeakerWaveIcon
          className={iconStyle}
          onClick={() => setIsMuted(!isMuted)}
        />
      )}
      <Tippy
        delay={[300, 300]}
        hideOnClick
        interactive
        offset={[10, 20]}
        render={() => (
          <div className="py-3 bg-black-primary text-white opacity-80 rounded-md border">
            <p className="font-bold px-4 pb-2 border-b">Select Playlist</p>
            <ul>
              {playlist.map((playlist, index) => (
                <li
                  key={`${playlist.name}-${index}`}
                  className="py-2 px-4 hover:bg-[rgba(255,255,255,0.3)] cursor-pointer"
                  onClick={() => handleChangePlaylist(playlist.name)}
                >
                  {playlist.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      >
        <MusicalNoteIcon className={iconStyle} />
      </Tippy>
    </div>
  );
};

export default ControlMusic;
