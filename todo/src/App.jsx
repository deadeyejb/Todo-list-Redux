import { useState } from "react";

import "./App.css";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Item />
    </>
  );
}

export default App;
