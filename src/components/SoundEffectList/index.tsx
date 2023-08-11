import { SoundsEffectList } from "@/data/SoundsEffectList";
import { SoundsEffectType } from "@/shared/types";
import SoundEffectItem from "../SoundEffectItem";

const SoundEffectList = () => {
  return (
    <div className="absolute bottom-24 left-4 right-4 flex items-center justify-center">
      {SoundsEffectList.map((sound: SoundsEffectType, index: number) => (
        <SoundEffectItem
          key={`${sound.title}-${index}`}
          sound={sound}
        />
      ))}
    </div>
  );
};

export default SoundEffectList;
