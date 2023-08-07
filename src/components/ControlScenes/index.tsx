import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";




const ControlScenes = () => {
 

  const iconStyle =
    "w-8 h-8 rounded-md text-white p-1 cursor-pointer hover:scale-[1.1] hover:bg-red-primary transition duration-400";

  const [isRainTheme, setIsRainTheme] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      {/* <span className="text-white min-w-[65px]">
        {isRainTheme ? "No Rain" : "Rain"}
      </span> */}
      <input
        type="checkbox"
        className="mx-2 relative appearance-none w-16 h-8 rounded-full bg-[rgba(0,0,0,0.6)] cursor-pointer outline-none transition duration-300 ease-in before:content-normal before:absolute before:top-[50%] before:left-2 before:h-6 before:w-6 before:translate-y-[-50%] before:bg-white before:rounded-full checked:before:left-8 checked:bg-[#fdcf21]  before:transition before:duration-500 before:ease-in-out"
        onChange={() => setIsRainTheme(!isRainTheme)}
      />
      <PhotoIcon className={iconStyle} />
    </div>
  );
};

export default ControlScenes;
