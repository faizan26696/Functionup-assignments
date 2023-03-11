import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  const HandlIncreament = () => {
    setcount(count + 1);
  };

  const HandlDecreament = () => {
    setcount(count - 1);
  };

  return (
    <div className="content">
      <h1 style={{ color: "red" }}>{count}</h1>
      <button onClick={HandlIncreament}>Increament</button>
      <button onClick={HandlDecreament}>Decreament</button>
    </div>
  );
}

export default App;
