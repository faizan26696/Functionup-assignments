import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome back!</h1>
      <Link to="/login">
        <button className="btn btn-primary mb-4 w-25 m-2">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-primary mb-4 w-25 m-2">Register</button>
      </Link>
    </div>
  );
};

export default Home;
