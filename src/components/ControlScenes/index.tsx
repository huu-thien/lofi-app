import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Tippy from "@tippyjs/react/headless";
import { Swiper, SwiperSlide } from "swiper/react";

import { ScenesType } from "@/shared/types";
import { ScenesList } from "@/data/ScenesList";

const ControlScenes = () => {
  const iconStyle =
    "w-8 h-8 rounded-md text-white p-1 mx-2 cursor-pointer hover:scale-[1.1] hover:bg-red-primary transition duration-400";

  const [isRainTheme, setIsRainTheme] = useState<boolean>(false);

  return (
    <div className="flex">
      <Tippy
        delay={[300, 300]}
        hideOnClick
        interactive
        offset={[10, 20]}
        render={() => (
          <Swiper
            className="flex items-center bg-black-primary p-4 max-w-[400px] border"
            spaceBetween={8}
            slidesPerView={2}
          >
            {ScenesList.map((scene: ScenesType, index: number) => (
              <SwiperSlide
                key={`${scene.title}-${index}`}
                className="cursor-pointer mx-2 hover:scale-[1.08] transition duration-400"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  className="min-h-[120px] object-cover rounded-md"
                  src={scene.image}
                  alt={scene.title}
                />
                <p className="text-white py-2 text-center">{scene.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      >
        <PhotoIcon className={iconStyle} />
      </Tippy>
      <input
        type="checkbox"
        className="mx-2 relative appearance-none w-16 h-8 rounded-full bg-[rgba(0,0,0,0.6)] cursor-pointer outline-none transition duration-300 ease-in before:content-normal before:absolute before:top-[50%] before:left-2 before:h-6 before:w-6 before:translate-y-[-50%] before:bg-white before:rounded-full checked:before:left-8 checked:bg-[#fdcf21]  before:transition before:duration-500 before:ease-in-out"
        onChange={() => setIsRainTheme(!isRainTheme)}
      />
    </div>
  );
};

export default ControlScenes;
