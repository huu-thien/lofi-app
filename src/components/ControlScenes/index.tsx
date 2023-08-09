import { useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Tippy from "@tippyjs/react/headless";
import { Swiper, SwiperSlide } from "swiper/react";

import { ScenesType } from "@/shared/types";
import { ScenesList } from "@/data/ScenesList";

type Propstype = {
  setScenes: (value: ScenesType) => void;
  isNightTheme: boolean;
  setIsNightTheme: (value: boolean) => void;
};

const ControlScenes = ({
  setScenes,
  isNightTheme,
  setIsNightTheme,
}: Propstype) => {
  const iconStyle =
    "w-8 h-8 rounded-md text-white p-1 mx-2 cursor-pointer hover:scale-[1.1] hover:bg-red-primary transition duration-400";

  return (
    <div className="flex">
      <Tippy
        delay={[300, 300]}
        hideOnClick
        interactive
        offset={[10, 30]}
        render={() => (
          <Swiper
            className="flex items-center bg-black-primary p-6 max-w-[400px] border rounded-md"
            spaceBetween={8}
            slidesPerView={2}
          >
            {ScenesList.map((scene: ScenesType, index: number) => (
              <SwiperSlide
                key={`${scene.title}-${index}`}
                className="cursor-pointer mx-2 hover:scale-[1.08] transition duration-400"
                onClick={(e) => {
                  e.preventDefault();
                  setScenes(scene);
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
      <Tippy
        delay={[300, 300]}
        hideOnClick
        interactive
        offset={[10, 30]}
        render={() => (
          <p className="p-3 bg-black-primary text-white border rounded-md">
            {isNightTheme
              ? "Click to change Night Theme 🌗 "
              : "Click to change Sun Theme ☀️"}
          </p>
        )}
      >
        <input
          type="checkbox"
          className={`mx-2 relative appearance-none w-16 h-8 rounded-full bg-[#2f2870] cursor-pointer outline-none transition duration-300 ease-in before:content-['☀️'] before:absolute before:top-[50%] before:left-2 before:h-6 before:w-6 before:translate-y-[-50%] before:bg-white before:rounded-full checked:before:left-8 checked:bg-[#f12d37] before:transition before:duration-300 before:ease-in-out`}
          onChange={() => {
            setIsNightTheme(!isNightTheme);
          }}
        />
      </Tippy>
    </div>
  );
};

export default ControlScenes;
