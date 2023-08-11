import { SoundsEffectType } from "@/shared/types";
import Tippy from "@tippyjs/react/headless";
import { useRef, useState } from "react";

type PropsType = {
  sound: SoundsEffectType;
};

const SoundEffectItem = ({ sound }: PropsType) => {
  const soundAudioRef = useRef<HTMLAudioElement | null>(null);
  const [soundPlaying, setSoundPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [inputVolemeValue, setInputVolemeValue] = useState<number>(50);

  const playSound = (): void => {
    if (soundAudioRef.current) {
      soundAudioRef.current.play();
      soundAudioRef.current.volume = volume;
    }
  };
  const pauseSound = (): void => {
    if (soundAudioRef.current) {
      soundAudioRef.current.pause();
    }
  };

  const handleToggleSound = (): void => {
    setSoundPlaying(!soundPlaying);
    if (soundPlaying) {
      pauseSound();
    } else {
      playSound();
    }
  };

  const handleChangvolumn = (value: number): void => {
    setVolume(value / 100);
    setInputVolemeValue(value);
    if (soundAudioRef.current) {
      soundAudioRef.current.volume = volume;
    }
  };

  return (
    <div>
      <Tippy
        delay={[300, 300]}
        hideOnClick={false}
        interactive
        offset={[10, 20]}
        render={(attrs) => (
          <div
            className="bg-black-primary text-white p-3 border rounded-md flex items-center"
            {...attrs}
          >
            <div>
              <p className="pb-2">{sound.title} </p>
              <input
                type="range"
                min={0}
                max={100}
                className="accent-pink-500 cursor-pointer w-full"
                value={inputVolemeValue}
                onChange={(e) => handleChangvolumn(Number(e.target.value))}
              />
            </div>
          </div>
        )}
      >
        <div
          className="w-6 h-6 mx-2 rounded-full border-2 flex items-center justify-center cursor-pointer hover:border-[#fcce00] transition duration-400"
          onClick={() => {
            handleToggleSound();
          }}
        >
          {(soundPlaying && volume > 0) ? (
            <div className="w-3 h-3 rounded-full bg-[#fcce00]"></div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-white"></div>
          )}
          <audio src={sound.sound} ref={soundAudioRef} onEnded={playSound}></audio>
        </div>
      </Tippy>
    </div>
  );
};

export default SoundEffectItem;
