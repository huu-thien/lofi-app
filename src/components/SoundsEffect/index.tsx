import { SoundsEffectList } from "@/data/SoundsEffectList";
import { SoundsEffectType } from "@/shared/types";
import Tippy from "@tippyjs/react";

const SoundsEffect = () => {
  return (
    <div className="absolute bottom-24 left-4 right-4">
      <ul className="flex items-center justify-center">
        {SoundsEffectList.map((sound: SoundsEffectType, index: number) => (
          <Tippy
            delay={[300, 300]}
            hideOnClick
            interactive
            offset={[10, 20]}
            render={() => (
              <div className="bg-black-primary text-white p-3  border rounded-md">
                <p className="pb-2">{sound.title}</p>
                <input
                  type="range"
                  min={0}
                  max={100}
                  className="accent-pink-500 cursor-pointer"
                />
              </div>
            )}
          >
            <li key={`${sound.title}-${index}`} className="cursor-pointer">
              <div className="w-6 h-6 mx-2 flex items-center justify-center rounded-full border-2 hover:border-[#fcce00] transition duration-400">
                <div className="w-2 h-2 rounded-full border bg-white-primary"></div>
              </div>
            </li>
          </Tippy>
        ))}
      </ul>
    </div>
  );
};

export default SoundsEffect;
