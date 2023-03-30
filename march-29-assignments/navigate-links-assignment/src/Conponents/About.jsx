import React from "react";
import style from "./Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className={style.Navbar}>
        <ul className="Navlinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
      <h1>This is About Page</h1>
    </div>
  );
};

export default About;
