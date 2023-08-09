// import { useState, useEffect } from "react";
import { ScenesType } from "@/shared/types";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type PropsType = {
  scenes: ScenesType;
  isNightTheme: boolean;
};

const Background = ({ scenes, isNightTheme }: PropsType) => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className={`w-full h-full object-cover absolute top-0 left-0 z-[-1] transition-opacity duration-1000 ease-in-out ${
          !isNightTheme ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        src={scenes.video_sun}
        autoPlay
        loop
        muted
      />
      <video
        className={`w-full h-full object-cover z-[1] transition-opacity duration-1000 ease-in-out ${
          !isNightTheme ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        src={scenes.video_night}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Background;
