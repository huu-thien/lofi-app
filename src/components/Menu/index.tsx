import ControlMusic from "../ControlMusic";
import ControlScenes from "../ControlScenes";
import Time from "../Time";
import useMediaQuery from "@/hooks/useMediaQuery";

function Menu() {
  const isAboveMediumScreens = useMediaQuery("(max-width: 768px)");
  const containerStyle = `h-14 px-4 fixed bottom-6 right-6 left-6 bg-black-primary border rounded-md flex items-center justify-between`

  return (
    <div className={containerStyle}>
      {!isAboveMediumScreens && <Time />}
      <ControlMusic />
      <ControlScenes />
    </div>
  );
}
export default Menu;
