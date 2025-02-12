import { useState } from "react";
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
