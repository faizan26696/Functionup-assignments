import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setData(data.filter((post) => post.id !== id)))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <table className="main-table">
        <thead>
          <tr className="table-head">
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody className="main-body">
          {data.map((post) => (
            <tr className="main-content">
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button onClick={() => deleteHandler(post.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
