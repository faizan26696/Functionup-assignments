import React, { useEffect, useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Detail from "./Detail";

export const DataContext = createContext();

export default function App() {
  const [data, setData] = useState([]);
  const [currPost, setCurrPost] = useState({});
  const handleAPI = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setData(data);
  };
  useEffect(() => {
    handleAPI();
  }, []);

  const handleClick = (post) => {
    setCurrPost(post);
  };

  return (
    <DataContext.Provider value={{ currPost, handleClick }}>
      <div className="App">
        <div className="list-container">
          {data &&
            data.map((post) => (
              <div key={post.id} className="list">
                <Link to="#" onClick={() => handleClick(post)}>
                  {post.title}
                </Link>
              </div>
            ))}
        </div>
        <Detail />
      </div>
    </DataContext.Provider>
  );
}
