import { useState, useRef, useEffect } from "react";
import {
  BackwardIcon,
  ForwardIcon,
  PlayCircleIcon,
  PauseCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  MusicalNoteIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";
import Tippy from "@tippyjs/react/headless";
import { playlist } from "@/data/PlayList";
import { PlaylistType, SongType } from "@/shared/types";
// import useMediaQuery from "@/hooks/useMediaQuery";

const ControlMusic = () => {
  // const isAboveMediumScreens = useMediaQuery("(max-width: 1024px)");
  // const isAboveMobleScreens = useMediaQuery("(max-width: 768px)");
  const iconStyle =
    "w-8 h-8 rounded-md text-white p-1 mx-2 cursor-pointer hover:scale-[1.1] hover:bg-red-primary transition duration-400 focus:border-none";
  // Manage songs
  const [playList, setPlayList] = useState<PlaylistType>(playlist[0]);
  const [songs, setSongs] = useState<SongType[]>(playList.songs);
  const [indexSong, setIndexSong] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState<SongType>(songs[indexSong]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [volumn, setVolumn] = useState<number>(0.5);
  const [inputVolemeValue, setInputVolemeValue] = useState<number>(50);

  // ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Play song
  const playSong = (): void => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = volumn;
    }
  };
  // Pause song
  const pauseSong = (): void => {
    audioRef.current?.pause();
  };
  // Next Song
  const handleNextSong = (): void => {
    if (indexSong === songs.length - 1) {
      setIndexSong(0);
      setCurrentSong(songs[0]);
    } else {
      setIndexSong(indexSong + 1);
      setCurrentSong(songs[indexSong + 1]);
    }
    playSong();
  };
  // Prev Song
  const handlePrevSong = (): void => {
    if (indexSong === 0) {
      setIndexSong(songs.length - 1);
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setIndexSong(indexSong - 1);
      setCurrentSong(songs[indexSong - 1]);
    }
    playSong();
  };
  // Repeat Song
  const handleRepeatSong = (): void => {
    if (isRepeat) {
      playSong();
    } else {
      handleNextSong();
    }
  };
  // Change Volumn
  const handleChangvolumn = (value: number): void => {
    setVolumn(value / 100);
    setInputVolemeValue(value);
    if (audioRef.current) {
      audioRef.current.volume = volumn;
    }
  };

  // Uptate những state phụ thuộc playList
  useEffect(() => {
    const updatedSongs = playList.songs;
    setSongs(updatedSongs);
    setIndexSong(0);
    setCurrentSong(updatedSongs[0]);
  }, [playList]);
  useEffect(() => {
    if (isMuted) {
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    } else {
      if (audioRef.current) {
        audioRef.current.volume = volumn;
      }
    }
  }, [isMuted]);
  return (
    <div className="flex items-center">
      <audio
        src={currentSong.src}
        autoPlay={isPlaying}
        ref={audioRef}
        onEnded={handleRepeatSong}
      />
      {/* <div className="flex flex-col min-w[60]">
        <div className="waves-loading mx-auto">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      {/* <span className="text-white text-center pb-1">{currentSong.name}</span> */}

      <BackwardIcon className={iconStyle} onClick={handlePrevSong} />
      {!isPlaying ? (
        <PlayCircleIcon
          className={iconStyle}
          onClick={() => {
            setIsPlaying(!isPlaying);
            playSong();
          }}
        />
      ) : (
        <PauseCircleIcon
          className={iconStyle}
          onClick={() => {
            setIsPlaying(!isPlaying);
            pauseSong();
          }}
        />
      )}
      <ForwardIcon className={iconStyle} onClick={handleNextSong} />
      <Tippy
        delay={[300, 300]}
        hideOnClick
        interactive
        offset={[10, 20]}
        render={() => (
          <p className="p-3 bg-[#363636] text-white border rounded-md">
            {isRepeat ? "Not Repeat" : "Repeat"}
          </p>
        )}
      >
        <ArrowPathRoundedSquareIcon
          className={`${iconStyle} ${isRepeat ? "bg-red-primary" : ""}`}
          onClick={() => setIsRepeat(!isRepeat)}
        />
      </Tippy>
      {isMuted ? (
        <Tippy
          delay={[300, 300]}
          hideOnClick
          interactive
          offset={[10, 20]}
          render={() => (
            <p className="p-3 bg-[#363636] text-white border rounded-md">
              Unmute
            </p>
          )}
        >
          <SpeakerXMarkIcon
            className={iconStyle}
            onClick={() => {
              setIsMuted(!isMuted);
            }}
          />
        </Tippy>
      ) : (
        <Tippy
          delay={[300, 300]}
          hideOnClick
          interactive
          offset={[10, 20]}
          render={() => (
            <div className="bg-[#363636] p-3 border rounded-md">
              <input
                className="accent-pink-500 cursor-pointer"
                type="range"
                min={0}
                max={100}
                value={inputVolemeValue}
                onChange={(e) => handleChangvolumn(Number(e.target.value))}
              />
            </div>
          )}
        >
          <SpeakerWaveIcon
            className={iconStyle}
            onClick={() => {
              setIsMuted(!isMuted);
            }}
          />
        </Tippy>
      )}
      <Tippy
        delay={[300, 300]}
        hideOnClick
        interactive
        offset={[10, 20]}
        render={() => (
          <div className="py-3 bg-[#363636] text-white rounded-md border">
            <p className="font-bold px-4 pb-2 border-b">Select Playlist</p>
            <ul>
              {playlist.map((item, index) => (
                <li
                  key={`${item.name}-${index}`}
                  className="py-2 px-4 hover:bg-[rgba(255,255,255,0.3)] cursor-pointer"
                  onClick={() => setPlayList(item)}
                >
                  {item.name} 💓
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
