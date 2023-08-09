import { SoundsEffectList } from "@/data/SoundsEffectList";
import { SoundsEffectType } from "@/shared/types";
import Tippy from "@tippyjs/react";
import React from "react";

const SoundsEffect = () => {
  return (
    <div className="absolute bottom-24 left-4 right-4 flex items-center justify-center">
      {SoundsEffectList.map((sound: SoundsEffectType, index: number) => (
        <div key={`${sound.title}-${index}`}>
          <Tippy
            interactive
            hideOnClick={false}
            offset={[10, 20]}
            render={() => (
              <div className="bg-black-primary text-white p-3  border rounded-md">
                <div>
                  <p className="pb-2">{sound.title}</p>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    className="accent-pink-500 cursor-pointer"
                  />
                </div>
              </div>
            )}
          >
            <div className="w-6 h-6 mx-2 rounded-full border-2 flex items-center justify-center cursor-pointer hover:border-[#fcce00] transition duration-400">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </Tippy>
        </div>
      ))}
    </div>
  );
};

export default SoundsEffect;
