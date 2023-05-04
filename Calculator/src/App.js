import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (event) => {

    // console.log(event)
    setInput(input + event.target.value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line 
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator using React 🧮</h1>
      <input className="calculator__display" value={input} disabled />
      <div className="calculator__keypad">
        <button className="calculator__key" onClick={handleClick} value="7">
          7
        </button>
        <button className="calculator__key" onClick={handleClick} value="8">
          8
        </button>
        <button className="calculator__key" onClick={handleClick} value="9">
          9
        </button>
        <button className="calculator__key" onClick={handleClick} value="+">
          +
        </button>
        <button className="calculator__key" onClick={handleClick} value="4">
          4
        </button>
        <button className="calculator__key" onClick={handleClick} value="5">
          5
        </button>
        <button className="calculator__key" onClick={handleClick} value="6">
          6
        </button>
        <button className="calculator__key" onClick={handleClick} value="-">
          -
        </button>
        <button className="calculator__key" onClick={handleClick} value="1">
          1
        </button>
        <button className="calculator__key" onClick={handleClick} value="2">
          2
        </button>
        <button className="calculator__key" onClick={handleClick} value="3">
          3
        </button>
        <button className="calculator__key" onClick={handleClick} value="*">
          *
        </button>
        <button className="calculator__key" onClick={handleClick} value="0">
          0
        </button>
        <button className="calculator__key" onClick={handleClick} value=".">
          .
        </button>
        <button className="calculator__key" onClick={handleClick} value="/">
          /
        </button>
        <button
          className="calculator__key calculator__key--clear"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="calculator__key calculator__key--equal"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}
