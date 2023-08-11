import { SoundsEffectType } from "@/shared/types";

import BirdSound from "@/assets/audio/sound-effect/birds.mp3";
import CampFire from "@/assets/audio/sound-effect/campfire.mp3";
import CityTraffic from "@/assets/audio/sound-effect/city_traffic.mp3";
import ForestNight from "@/assets/audio/sound-effect/forest_night.mp3";
import RainCity from "@/assets/audio/sound-effect/rain_city.mp3";
import RainForest from "@/assets/audio/sound-effect/rain_forest.mp3";
import RiverSound from "@/assets/audio/sound-effect/river.mp3";
import SummerStorm from "@/assets/audio/sound-effect/summer_storm.mp3";
import WavesSound from "@/assets/audio/sound-effect/waves.mp3";

export const SoundsEffectList: SoundsEffectType[] = [
  {
    id: 1,
    title: "Bird Sound",
    sound: BirdSound,
  },
  {
    id: 2,
    title: "Camp Fire Sound",
    sound: CampFire,
  },
  {
    id: 3,
    title: "City Traffic Sound",
    sound: CityTraffic,
  },
  {
    id: 4,
    title: "Forest Night Sound",
    sound: ForestNight,
  },
  {
    id: 5,
    title: "Rain City Sound",
    sound: RainCity,
  },
  {
    id: 6,
    title: "Rain Forest Sound",
    sound: RainForest,
  },
  {
    id: 7,
    title: "River Sound",
    sound: RiverSound,
  },
  {
    id: 8,
    title: "Summer Storm Sound",
    sound: SummerStorm,
  },
  {
    id: 9,
    title: "Waves Sound",
    sound: WavesSound,
  },
];
