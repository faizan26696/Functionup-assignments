import React, { useContext } from "react";
import { DataContext } from "./App";
const Detail = ({ Post }) => {
  const { currPost } = useContext(DataContext);
  return (
    <div className="post-detail-container">
      <h1>Id: {currPost.id}</h1>
      <h2>Title: {currPost.title}</h2>
      <p>Body: {currPost.body}</p>
    </div>
  );
};

export default Detail;
