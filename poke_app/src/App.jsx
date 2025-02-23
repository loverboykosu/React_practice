import { useState } from "react";
import "./App.css";
import Poke from "./components/Poke";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Poke />
    </>
  );
}

export default App;
