import Background from "./components/Background";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Time from "./components/Time";

function App() {
  return (
    <div className="app relative">
      <Background />
      <Logo />
      <Menu />
      <Time />
    </div>
  );
}

export default App;
