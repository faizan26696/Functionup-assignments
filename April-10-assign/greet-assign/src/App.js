import React, { useState } from "react";
import "./index.css";

const greetings = ["Hello", "Good Morning", "Hi", "Hey there", "Greetings"];

function App() {
  const [Greeting, setGreeting] = useState(greetings[0]);

  function GreetIndexHandle() {
    let nextIndex;
    const currIndex = greetings.indexOf(Greeting);
    if (currIndex === greetings.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currIndex + 1;
    }
    setGreeting(greetings[nextIndex]);
  }

  return (
    <div className="App">
      <h1>{Greeting}</h1>
      <button onClick={GreetIndexHandle}>Next Greeting</button>
    </div>
  );
}

export default App;
