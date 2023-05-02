import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const data = [
    { word: "cars" },
    { word: "apple" },
    { word: "bike" },
    { word: "dogs" },
    { word: "engineering" },
    { word: "fly" },
    { word: "shoot" },
    { word: "kill" },
    { word: "joker" },
    { word: "white" },
    { word: "little" },
    { word: "nature" },
    { word: "hooks" },
    { word: "xbox" },
    { word: "coock" },
    { word: "create" },
    { word: "ball" },
    { word: "joy" },
    { word: "elements" },
    { word: "fruits" },
    { word: "Show" },
    { word: "hell" },
    { word: "server" },
    { word: "whole" },
    { word: "lowercase" },
    { word: "name" },
    { word: "hourse" },
    { word: "Art" },
  ];

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // console.log("search", searchTerm);
  };

  return (
    <div className="App">
      <h1>Search </h1>
      <div className="Container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => onSearch(value)}>Search</button>
      </div>
      <div className="suggesion">
        {data
          .filter((item) => {
            const searchTerm = value.toLocaleLowerCase();
            const arrWord = item.word.toLocaleLowerCase();

            return searchTerm && arrWord.startsWith(searchTerm);
          })
          .map((item) => {
            // console.log(item)
            return (
              <div style={{ color: "black" }}>
                <p onClick={() => onSearch(item.word)}>{item.word}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
