import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("Amit");

  function HandleName() {
    setName(name === "Amit" ? "Rajan" : "Amit");
  }
  return (
    <div className="content">
      <h1>{name}</h1>
      <button onClick={HandleName}>Change Name</button>
    </div>
  );
}
export default App;
