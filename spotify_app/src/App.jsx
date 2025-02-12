import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spotify from "./components/Spotify";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Spotify />
    </>
  );
}

export default App;
