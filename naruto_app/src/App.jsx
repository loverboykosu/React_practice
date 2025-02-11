import { useState } from "react";
import Naruto from "./components/Sample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Naruto />
    </>
  );
}

export default App;
