import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [item, setitem] = useState([]);
  const [inputvalue, setinputvalue] = useState("");

  const handleAddItem = () => {
    if (inputvalue.trim() !== "") {
      setitem([...item, inputvalue]);
      setinputvalue("");
    }
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />

        <button onClick={handleAddItem}>add</button>
      </div>
      <div>
        <TodoList items={item} />
      </div>
    </div>
  );
}

export default App;
