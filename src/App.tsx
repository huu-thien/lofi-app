import { useState } from "react";

import Background from "./components/Background";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import useMediaQuery from "@/hooks/useMediaQuery";
import Time from "./components/Time";
import { ScenesList } from "./data/ScenesList";
import { ScenesType } from "./shared/types";

function App() {
  const isAboveMediumScreens = useMediaQuery("(max-width: 1024px)");

  // Manage scenes
  const [scenes, setScenes] = useState<ScenesType>(ScenesList[0]);
  const [isNightTheme, setIsNightTheme] = useState<boolean>(false);
  return (
    <div className="app relative overflow-hidden">
      <Background scenes={scenes} isNightTheme={isNightTheme}/>
      {isAboveMediumScreens && <Time />}
      {!isAboveMediumScreens && <Logo />}
      <Menu setScenes={setScenes} isNightTheme={isNightTheme} setIsNightTheme={setIsNightTheme}/>
    </div>
  );
}

export default App;
