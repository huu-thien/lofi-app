import Background from "./components/Background";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import useMediaQuery from "@/hooks/useMediaQuery";
import Time from "./components/Time";

function App() {
  const isAboveMediumScreens = useMediaQuery("(max-width: 768px)");
  return (
    <div className="app relative">
      <Background />
      {isAboveMediumScreens && <Time />}
      {!isAboveMediumScreens && <Logo />}
      <Menu />
    </div>
  );
}

export default App;
