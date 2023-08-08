import { ScenesType } from "@/shared/types";
import 'swiper/css';

// Lake house inside Sun
import LakeHouseDayInSun from "@/assets/videos/lake-house-inside/inside_day.mp4";
import LakeHouseNightInSun from "@/assets/videos/lake-house-inside/inside_night.mp4";
import ImageLakeHouseInsideSun from "@/assets/images/lake-house/inside-sun.png";

// Lake house inside rain
import LakeHouseDayInRain from "@/assets/videos/lake-house-inside/inside_day_rain.mp4";
import LakeHouseNightInRain from "@/assets/videos/lake-house-inside/inside_night_rain.mp4";
import ImageLakeHouseInsideRain from "@/assets/images/lake-house/inside-rain.png";

// Lake house out side sun
import LakeHouseDayOutSun from "@/assets/videos/lake-house-outside/outside_day.mp4";
import LakeHouseNightOutSun from "@/assets/videos/lake-house-outside/outside_night.mp4";
import ImageLakeHouseOutsideSun from "@/assets/images/lake-house/outside-sun.png";

// Lake house out side rain
import LakeHouseDayOutRain from "@/assets/videos/lake-house-outside/outside_day_rain.mp4";
import LakeHouseNightOutRain from "@/assets/videos/lake-house-outside/outside_night_rain.mp4";
import ImageLakeHouseOutsideRain from "@/assets/images/lake-house/outside-rain.png";

// The woods inside
// import TheWoodInSun from "@/assets/videos/the-woods-inside/inside_sun.mp4";
// import TheWoodInRain from "@/assets/videos/the-woods-inside/inside_rain.mp4";

// The woods outside
// import TheWoodOutSun from "@/assets/videos/the-woods-outside/outside_sun.mp4";
// import TheWoodOutRain from "@/assets/videos/the-woods-outside/outside_rain.mp4";

export const ScenesList: ScenesType[] = [
  {
    id: 1,
    title: "Lake House Inside Sun",
    video_sun: LakeHouseDayInSun,
    video_night: LakeHouseNightInSun,
    image: ImageLakeHouseInsideSun,
  },
  {
    id: 2,
    title: "Lake House Inside Rain",
    video_sun: LakeHouseDayInRain,
    video_night: LakeHouseNightInRain,
    image: ImageLakeHouseInsideRain,
  },
  {
    id: 3,
    title: "Lake House Outside Sun",
    video_sun: LakeHouseDayOutSun,
    video_night: LakeHouseNightOutSun,
    image: ImageLakeHouseOutsideSun,
  },
  {
    id: 4,
    title: "Lake House Outside Rain",
    video_sun: LakeHouseDayOutRain,
    video_night: LakeHouseNightOutRain,
    image: ImageLakeHouseOutsideRain,
  },
];
