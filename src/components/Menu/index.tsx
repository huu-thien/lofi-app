import ControlMusic from "../ControlMusic";
import ControlScenes from "../ControlScenes";
import Time from "../Time";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ScenesType } from "@/shared/types";

type Propstype = {
  setScenes: (value: ScenesType) => void;
  isNightTheme: boolean;
  setIsNightTheme: (value: boolean) => void;
};

function Menu({ setScenes, isNightTheme, setIsNightTheme }: Propstype) {
  const isAboveMediumScreens = useMediaQuery("(max-width: 1024px)");
  const isAboveTabletScreens = useMediaQuery("(max-width: 768px)");

  const containerStyle = `h-14 px-4 fixed bottom-6 right-4 left-4 bg-black-primary border rounded-md flex items-center ${
    isAboveTabletScreens ? "justify-center" : "justify-between"
  } `;

  return (
    <div className={containerStyle}>
      {!isAboveMediumScreens && <Time />}
      <ControlMusic />
      {!isAboveTabletScreens && (
        <ControlScenes
          setScenes={setScenes}
          isNightTheme={isNightTheme}
          setIsNightTheme={setIsNightTheme}
        />
      )}
    </div>
  );
}
export default Menu;
