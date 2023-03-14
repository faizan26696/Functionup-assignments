import React, { useRef, useState } from "react";
import "./App.css";
import { MdCancel } from "react-icons/md";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const initialValue = useRef(0);

  const handelChange = (e) => {
    setText(e.target.value);
  };

  const handelAdding = () => {
    const newUser = {
      id: new Date() + text,
      title: text,
      status: false,
      done: false,
    };
    if (newUser.title === "") return;
    setTodos([...todos, newUser]);
    setText("");
  };

  const handelDelete = (id) => {
    const filterData = todos.filter((todo) => todo.id !== id);
    setTodos(filterData);
  };

  const handelStatus = (id) => {
    const updateData = todos.map((item) => {
      if (item.id === id) {
        const latestStatus = !item.status;

        item.done = !item.done;
        return { ...item, status: latestStatus };
      } else {
        return item;
      }
    });
    setTodos(updateData);
    const completedCount = updateData.filter((item) => item.status).length;

    initialValue.current = completedCount;
  };

  const getBtnText = (item) => {
    if (item.done) return "Completed";
    return "Set Complete";
  };

  return (
    <div className="container">
      <h1>Pending Task ({todos.length - initialValue.current})</h1>

      <div>
        {todos &&
          todos.map((ele, index) => (
            <div key={index} className="Single-data">
              {ele.status ? (
                <p>
                  <strike> {ele.title}</strike>
                </p>
              ) : (
                <p>{ele.title}</p>
              )}
              <div>
                <button onClick={() => handelStatus(ele.id)}>
                  {getBtnText(ele)}
                </button>
                <MdCancel
                  className="icon"
                  onClick={() => handelDelete(ele.id)}
                />
              </div>
            </div>
          ))}
      </div>
      <div className="input-part">
        <input
          type="text"
          value={text}
          onChange={(e) => handelChange(e)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) handelAdding();
          }}
        />
        <button onClick={handelAdding}>Add</button>
      </div>
    </div>
  );
};

export default App;
