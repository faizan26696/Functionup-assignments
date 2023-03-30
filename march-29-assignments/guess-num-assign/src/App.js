import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [luckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guessnum, setGuessNum] = useState(0);
  const [count, setCount] = useState(0);

  const handelInputChange = (e) => {
    setGuessNum(parseInt(e.target.value));
  };

  const handelClick = () => {
    setCount(count + 1);
    if (guessnum < luckyNumber) {
      alert("you guessed a smaller number.");
      setGuessNum(0);
    } else if (guessnum > luckyNumber) {
      alert("you guessed a bigger number.");
      setGuessNum(0);
    } else {
      alert(
        `Congratulations! You Guessed The Right Number In ${count + 1} Attempts`
      );
      setGuessNum(0);
    }
  };
  return (
    <div className="GuessINput">
      <input type="text" value={guessnum} onChange={handelInputChange} />
      <button onClick={handelClick}>Match Number</button>
    </div>
  );
}
